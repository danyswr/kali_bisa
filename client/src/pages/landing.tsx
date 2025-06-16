import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Store, ShoppingCart, TrendingUp, Star, Shield, Zap, Users, Award, CheckCircle, ArrowRight, ChefHat, Clock, MapPin, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function Landing() {
  const features = [
    {
      icon: <Store className="h-8 w-8 text-primary" />,
      title: "Marketplace Terpercaya",
      description: "Platform yang aman dan terpercaya untuk jual beli katering dengan sistem verifikasi lengkap."
    },
    {
      icon: <ChefHat className="h-8 w-8 text-primary" />,
      title: "Chef Profesional",
      description: "Kerjasama dengan chef berpengalaman untuk menjamin kualitas makanan terbaik."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Pengiriman Tepat Waktu",
      description: "Sistem logistik terintegrasi untuk memastikan pesanan tiba sesuai jadwal."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Keamanan Terjamin",
      description: "Transaksi aman dengan sistem pembayaran yang terenkripsi dan terlindungi."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Komunitas Besar",
      description: "Bergabung dengan ribuan penjual dan pembeli di seluruh Indonesia."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Kualitas Premium",
      description: "Standar kualitas tinggi dengan review dan rating dari pelanggan nyata."
    }
  ];

  const stats = [
    { number: "10K+", label: "Pengguna Aktif", icon: <Users className="h-6 w-6" /> },
    { number: "500+", label: "Penjual Terdaftar", icon: <Store className="h-6 w-6" /> },
    { number: "50K+", label: "Pesanan Selesai", icon: <ShoppingCart className="h-6 w-6" /> },
    { number: "4.8/5", label: "Rating Kepuasan", icon: <Star className="h-6 w-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Wijaya",
      role: "Event Organizer",
      content: "UPJ Katering sangat membantu dalam mengorganisir acara perusahaan. Kualitas makanan luar biasa!",
      rating: 5
    },
    {
      name: "Ahmad Rizki",
      role: "Penjual Katering",
      content: "Platform yang mudah digunakan dan membantu meningkatkan penjualan saya secara signifikan.",
      rating: 5
    },
    {
      name: "Maya Sari",
      role: "Ibu Rumah Tangga",
      content: "Sangat praktis untuk memesan katering keluarga. Pengiriman selalu tepat waktu.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-background to-primary/10">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse-slow"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-6">
              <Badge variant="secondary" className="px-6 py-3 text-sm font-medium animate-pulse-slow shadow-lg glass">
                <Sparkles className="w-4 h-4 mr-2" />
                Platform E-Commerce Katering Terdepan di Indonesia
              </Badge>

              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight">
                <span className="block text-foreground animate-slide-up text-shadow">Selamat Datang di</span>
                <span className="block gradient-text animate-gradient bg-gradient-to-r from-primary via-blue-600 to-primary bg-[length:200%_auto] animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  UPJ Katering
                </span>
              </h1>

              <p className="max-w-4xl mx-auto text-xl sm:text-2xl text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
                Platform marketplace modern yang menghubungkan penjual dan pembeli katering dengan teknologi terdepan dan pengalaman yang luar biasa. Temukan cita rasa terbaik untuk setiap acara Anda.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Link href="/auth?mode=register&role=seller">
                <Button size="lg" className="group px-10 py-4 text-lg font-semibold shadow-glow-hover transform hover:scale-105 transition-all duration-300 rounded-xl">
                  <Store className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                  Mulai Jual Katering
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/auth?mode=register&role=buyer">
                <Button variant="outline" size="lg" className="group px-10 py-4 text-lg font-semibold border-2 hover:border-primary hover:bg-primary/5 transform hover:scale-105 transition-all duration-300 rounded-xl">
                  <ShoppingCart className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                  Pesan Katering Sekarang
                </Button>
              </Link>
            </div>

            {/* Stats Section */}
            <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover-lift">
                  <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300">
                    <div className="text-primary mb-2 flex justify-center group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 glass">
              <Award className="w-4 h-4 mr-2" />
              Mengapa Memilih Kami
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
              Fitur <span className="gradient-text">Unggulan</span> Kami
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Berbagai keunggulan yang membuat UPJ Katering menjadi pilihan terbaik untuk kebutuhan katering Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-4 border-0 glass rounded-2xl animate-fade-in card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="mb-6 p-4 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300 text-shadow">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 glass">
              <Star className="w-4 h-4 mr-2" />
              Testimoni Pelanggan
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
              Apa Kata <span className="gradient-text">Mereka</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dengarkan pengalaman nyata dari pengguna UPJ Katering
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass rounded-2xl border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in card-hover" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="space-y-8 animate-fade-in">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Bergabung Sekarang
            </Badge>

            <h2 className="text-4xl md:text-6xl font-bold text-white text-shadow">
              Siap Memulai Bisnis Katering Anda?
            </h2>

            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Bergabunglah dengan ribuan penjual dan pembeli yang telah merasakan kemudahan bertransaksi di platform kami. Daftar sekarang dan nikmati berbagai keuntungan eksklusif!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link href="/auth?mode=register&role=seller">
                <Button size="lg" variant="secondary" className="group px-12 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90 shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl">
                  <Store className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                  Daftar Sebagai Penjual
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/auth?mode=register&role=buyer">
                <Button size="lg" variant="outline" className="group px-12 py-4 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300 rounded-xl backdrop-blur-sm">
                  <ShoppingCart className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                  Daftar Sebagai Pembeli
                </Button>
              </Link>
            </div>

            <div className="pt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center space-x-3 group">
                <CheckCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="text-lg">Gratis Selamanya</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <CheckCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="text-lg">Tanpa Biaya Setup</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <CheckCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="text-lg">Support 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}