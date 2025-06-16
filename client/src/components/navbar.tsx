import { Link, useLocation } from "wouter";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  ShoppingBag, 
  Package, 
  LogOut, 
  Menu, 
  X, 
  Bell,
  User,
  Home,
  Store
} from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  onSearch?: (query: string) => void;
}

export function Navbar({ onSearch }: NavbarProps) {
  const { user, isAuthenticated, logout } = useAuth();
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <nav className="glass sticky top-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/80 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300 hover:scale-110">
                  <ShoppingBag className="h-6 w-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold gradient-text">UPJ Katering</h1>
                  <p className="text-xs text-muted-foreground">Marketplace Terpercaya</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {isAuthenticated && (
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href={user?.role === "buyer" ? "/buyer" : "/seller"}
                className={`group flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  location === (user?.role === "buyer" ? "/buyer" : "/seller")
                    ? "bg-primary/10 text-primary shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <Home className="inline-block w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Dashboard
              </Link>

              {user?.role === "buyer" && (
                <Link
                  href="/orders"
                  className={`group flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    location === "/orders"
                      ? "bg-primary/10 text-primary shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <Package className="inline-block w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Pesanan
                </Link>
              )}
            </div>
          )}

          {/* Search Bar */}
          {isAuthenticated && user?.role === "buyer" && (
            <div className="hidden md:block flex-1 max-w-lg mx-8">
              <div className="relative group">
                <Input
                  type="text"
                  placeholder="Cari produk, kategori, atau penjual..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full pl-12 pr-4 py-3 bg-muted/50 border-0 focus:bg-background transition-all duration-300 rounded-xl group-hover:shadow-md"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 group-hover:text-primary transition-colors" />
              </div>
            </div>
          )}

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                {/* Notifications */}
                <Button variant="ghost" size="sm" className="relative group hover:bg-primary/10 rounded-xl">
                  <Bell className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs animate-pulse"
                  >
                    3
                  </Badge>
                </Button>

                {/* User Menu */}
                <div className="flex items-center space-x-3 pl-3 border-l border-border/50">
                  <div className="hidden sm:block text-right">
                    <div className="text-sm font-medium text-foreground">
                      {user?.fullName || "User"}
                    </div>
                    <div className="text-xs text-muted-foreground capitalize flex items-center">
                      {user?.role === "buyer" ? (
                        <ShoppingBag className="w-3 h-3 mr-1" />
                      ) : (
                        <Store className="w-3 h-3 mr-1" />
                      )}
                      {user?.role}
                    </div>
                  </div>
                  
                  <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 hover:scale-110">
                    <User className="h-5 w-5 text-white" />
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                    className="text-muted-foreground hover:text-destructive transition-colors rounded-xl hover:bg-destructive/10"
                  >
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href="/auth?mode=login">
                  <Button variant="ghost" size="sm" className="rounded-xl hover:bg-primary/10">
                    Masuk
                  </Button>
                </Link>
                <Link href="/auth?mode=register">
                  <Button size="sm" className="gradient-bg text-white hover:shadow-glow rounded-xl">
                    Daftar
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-xl"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/40 py-4 space-y-2 animate-slide-up">
            {isAuthenticated && (
              <>
                <Link
                  href={user?.role === "buyer" ? "/buyer" : "/seller"}
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    location === (user?.role === "buyer" ? "/buyer" : "/seller")
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Home className="inline-block w-4 h-4 mr-3" />
                  Dashboard
                </Link>

                {user?.role === "buyer" && (
                  <>
                    <Link
                      href="/orders"
                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        location === "/orders"
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Package className="inline-block w-4 h-4 mr-3" />
                      Pesanan
                    </Link>

                    {/* Mobile Search */}
                    <div className="px-4 py-2">
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder="Cari produk..."
                          value={searchQuery}
                          onChange={handleSearch}
                          className="w-full pl-10 bg-muted/50 border-0 rounded-xl"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}