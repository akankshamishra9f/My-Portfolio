import ScrollToTop from "../ScrollToTop";

export default function ScrollToTopExample() {
  return (
    <div className="h-[200vh]">
      <div className="p-8">
        <p className="text-muted-foreground">Scroll down to see the scroll-to-top button appear</p>
      </div>
      <ScrollToTop />
    </div>
  );
}
