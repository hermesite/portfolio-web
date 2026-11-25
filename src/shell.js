import {ScrollSpy} from "npm:bootstrap@6.0.0-alpha.2/dist/js/bootstrap.bundle.min.js";

const lightbox = document.createElement("dialog");
lightbox.className = "image-lightbox";
lightbox.setAttribute("aria-label", "Image preview");

const closeLightbox = document.createElement("button");
closeLightbox.className = "image-lightbox-close";
closeLightbox.type = "button";
closeLightbox.setAttribute("aria-label", "Close image preview");
closeLightbox.textContent = "\u00d7";

const lightboxFigure = document.createElement("figure");
const lightboxImage = document.createElement("img");
const lightboxCaption = document.createElement("figcaption");
lightboxFigure.append(lightboxImage, lightboxCaption);
lightbox.append(closeLightbox, lightboxFigure);
document.body.append(lightbox);

function enableFigureImage(image) {
  if (image.closest(".image-lightbox, .image-lightbox-trigger")) return;

  const trigger = document.createElement("button");
  trigger.className = "image-lightbox-trigger";
  trigger.type = "button";
  trigger.setAttribute("aria-haspopup", "dialog");
  trigger.setAttribute("aria-label", `Open ${image.alt || "image"} in image viewer`);
  image.replaceWith(trigger);
  trigger.append(image);
}

const enableFigureImages = (root = document) => {
  for (const image of root.querySelectorAll("figure img")) enableFigureImage(image);
};

enableFigureImages();
new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (!(node instanceof Element)) continue;
      enableFigureImageIfNeeded(node);
      enableFigureImages(node);
    }
  }
}).observe(document.querySelector("#observablehq-main"), {childList: true, subtree: true});

function enableFigureImageIfNeeded(node) {
  if (node.matches?.("figure img")) enableFigureImage(node);
}

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const trigger = event.target.closest(".image-lightbox-trigger");
  if (!trigger) return;

  const image = trigger.querySelector("img");
  const caption = trigger.closest("figure")?.querySelector("figcaption");
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = caption?.textContent.trim() ?? "";
  lightbox.showModal();
});

closeLightbox.addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});

// Mark the navbar link of the current page.
const here = location.pathname.replace(/(\.html|\/)$/, "") || "/index";
for (const link of document.querySelectorAll("#observablehq-header a[href]")) {
  const path = new URL(link.href).pathname.replace(/(\.html|\/)$/, "") || "/index";
  if (path !== here) continue;
  link.classList.add("active");
  link.setAttribute("aria-current", "page");
  link.closest(".nav-item")?.querySelector("[data-bs-toggle=menu]")?.classList.add("active");
}

// Highlight the table of contents link of the section being read.
if (document.querySelector("#observablehq-toc")) {
  new ScrollSpy(document.body, {target: "#observablehq-toc", topMargin: "96px"});
}
