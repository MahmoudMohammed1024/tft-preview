import { Link } from "react-router-dom";
import { SITE_CONFIG } from "../config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-serif text-lg">TFT.</div>
          <p className="mt-2 text-sm text-foreground/70">
            Modern fashion store with WhatsApp ordering.
          </p>
        </div>

        <div className="text-sm">
          <div className="font-medium">Links</div>
          <div className="mt-3 flex flex-col gap-2 text-foreground/70">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/cart">Cart</Link>
          </div>
        </div>

        <div className="text-sm">
          <div className="font-medium">Contact</div>
          <p className="mt-3 text-foreground/70">
            Orders via WhatsApp only. Call us at: {SITE_CONFIG.whatsappNumber}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-8 text-xs text-foreground/60">
        © {new Date().getFullYear()} TFT. All rights reserved.
      </div>
    </footer >
  );
}
