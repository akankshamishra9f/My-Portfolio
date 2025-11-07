export default function Footer() {
  return (
    <footer className="relative py-8 bg-card border-t border-border overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-64 h-64 -bottom-32 -left-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute w-64 h-64 -bottom-32 -right-32 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground font-montserrat">
            © 2025 Akanksha Mishra | Designed with{" "}
            <span className="text-primary animate-pulse">💖</span> and Code
          </p>
        </div>
      </div>
    </footer>
  );
}
