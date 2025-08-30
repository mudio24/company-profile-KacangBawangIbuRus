"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import {
  Phone,
  Mail,
  MapPin,
  Award,
  Users,
  Clock,
  Facebook,
  Instagram,
  Shield,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"

const ProductCarousel = ({ images, alt }: { images: string[]; alt: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (images.length <= 1) {
    return <img src={images[0] || "/placeholder.svg"} alt={alt} className="w-full h-40 object-cover rounded-lg mb-3" />
  }

  return (
    <div className="relative mb-3">
      <img
        src={images[currentIndex] || "/placeholder.svg"}
        alt={`${alt} - Image ${currentIndex + 1}`}
        className="w-full h-40 object-cover rounded-lg"
      />

      {/* Navigation buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  const kacangBawangOriginalImages = [
    "original/pouch-original.jpg",
    "original/bulat.jpg",
    "original/500g.jpg",
    "original/Kacang-bawang-original-500-gram.jpg",
    "original/1.jpg",
    "original/2.jpg",
    "original/3.jpg",
    "/original-garlic-peanuts.png",
    "original/tabung-400gr.jpg",
    "original/toples-tabung-500gr.jpg",
  ]

  const kacangBawangBaladoImages = [
    "balado/1.jpg",
    "balado/2.jpg",
    "balado/3rasa.jpg",
    "original/bulat.jpg",
    "original/500g.jpg",
    "original/Kacang-bawang-original-500-gram.jpg",
    "original/3.jpg",
    "original/tabung-400gr.jpg",
  ]

  const kacangBawangJagungImages = [
    "/Jagung-garlic-peanuts-package.jpg",
    "original/bulat.jpg",
    "jagung/toples1.jpg",
    "jagung/toples2.jpg",
    "jagung/toples3.jpg",
    
    "original/bulat.jpg",
    "original/Kacang-bawang-original-500-gram.jpg",
  ]

  const packEkonomisImages = ["packan/pack1.jpg", "packan/pack-packan.jpg"]

  const kurmaImages = ["kurma/kurma1.jpg", "kurma/2.jpg"]

  const BestSellerImages = ["bestseller/1.jpg", "bestseller/2.jpg", "bestseller/3.jpg"]

  const basrengImages = ["basreng/ori.jpg", "basreng/pedas.jpg", "basreng/pack.jpg"]

  const hampersImages1 = ["hampers/1.jpg", "hampers/2.jpg"]

  const hampersImages2 = ["hampers/3.jpg"]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80 // Height of fixed navbar
      const elementPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  const openWhatsApp = (productName?: string) => {
    const phoneNumber = "6281395667031"
    const message = productName
      ? `Halo, saya tertarik dengan produk ${productName} dari Kacang Bawang Ibu Rus. Bisa tolong berikan informasi lebih lanjut?`
      : "Halo, saya tertarik dengan produk Kacang Bawang Ibu Rus. Bisa tolong berikan informasi lebih lanjut?"

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const galleryImages = [
    "/galeri/ba.jpg",
    "/galeri/bersama-bupati.jpg",
    "/galeri/pembuatan.jpg",
    "/galeri/produksi.jpg",
    "/galeri/kemasan.jpg",
    "/galeri/pengemasan.jpg",
    "/galeri/pengiriman1.jpg",
    "/galeri/pengiriman2.jpg",
    "/galeri/pengiriman3.jpg",
    "/galeri/pengiriman4.jpg",
    "/galeri/pengiriman6.jpg",
    "/galeri/pengiriman7.jpg",
    "/galeri/pengiriman8.jpg",
    "/galeri/pengiriman9.jpg",
    "/galeri/pengiriman10.jpg",
    "/galeri/pengiriman.jpg",
    "/galeri/pengiriman12.jpg",
    "/galeri/tim.jpg",
  ]

  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20">
        <Navbar />

        {/* Hero Section */}
        <section id="beranda" className="bg-gradient-to-br from-card to-background py-20">
          <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-accent text-accent-foreground">UMKM Terpercaya Sejak 2015</Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-blue-600" style={{ WebkitTextStroke: "0.5px white" }}>
              Kacang Bawang
            </span>{" "}
            <span className="text-red-600" style={{ WebkitTextStroke: "0.5px white" }}>
              Ibu Rus
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cemilane Wong Reang Selalu Bikin Ketagihan
          </p>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nikmati kelezatan kacang bawang tradisional dengan cita rasa autentik Indonesia. Dibuat dengan resep turun
            temurun dan bahan-bahan pilihan berkualitas tinggi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => openWhatsApp()}
            >
              <Phone className="mr-2 h-5 w-5" />
              Pesan Sekarang
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("produk")}>
              Lihat Produk
            </Button>
          </div>
          <div className="mt-12">
            <img src="/profile.jpg" alt="Kacang Bawang Premium" className="mx-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

        {/* About Section */}
        <section id="tentang" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-muted text-muted-foreground text-base">Tentang Kami</Badge>
                <h3 className="text-3xl font-bold text-foreground mb-6">Warisan Keluarga, Cita Rasa Terjaga</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-justify">
                  Usaha kacang bawang ini berawal dari seorang ibu yang awalnya hanya iseng membuat camilan lebaran
                  dengan resep rahasia keluarga. Tak disangka, rasa gurih dan kualitas kacang yang bagus mendapatkan
                  respon positif dari para penikmatnya. Permintaan pun mulai berdatangan, hingga akhirnya produksi
                  dilakukan secara rutin. Kini usaha ini diteruskan oleh anaknya, dengan jangkauan pasar yang semakin
                  luas, tidak hanya melayani permintaan lokal, tetapi juga telah menembus pasar mancanegara.
                </p>

                <div className="mb-8 text-justify">
                  <h4 className="text-xl font-bold text-foreground mb-4">Visi</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-justify">
                    Menjadi UMKM yang tidak hanya menghadirkan camilan berkualitas dan bercita rasa khas, tetapi juga
                    mampu memberikan dampak sosial positif dengan membuka peluang kerja dan membangun semangat
                    kebersamaan bagi masyarakat sekitar.
                  </p>

                  <h4 className="text-xl font-bold text-foreground mb-4">Misi</h4>
                  <ul className="text-muted-foreground space-y-2 leading-relaxed">
                    <li>
                      • Memberdayakan masyarakat setempat melalui penciptaan lapangan kerja yang adil dan
                      berkesinambungan.
                    </li>
                    <li>
                      • Menumbuhkan budaya kerja yang berlandaskan kebersamaan, gotong royong, dan saling mendukung.
                    </li>
                    <li>• Mengoptimalkan potensi lokal dengan melibatkan masyarakat dalam setiap proses produksi.</li>
                    <li>
                      • Menjaga keseimbangan antara pertumbuhan usaha dengan kontribusi sosial bagi lingkungan sekitar.
                    </li>
                    <li>
                      • Membangun UMKM yang berkelanjutan, sehingga dapat memberikan manfaat jangka panjang bagi
                      keluarga dan komunitas.
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">Kualitas Terjamin</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">1000+ Pelanggan</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">10+ Tahun Pengalaman</p>
                  </div>
                </div>
              </div>
              <div>
                <img src="/foto-keluarga.jpg" alt="Proses Pembuatan Kacang Bawang" className="rounded-lg shadow-lg" />
              </div>
            </div>

            {/* Legalitas & Sertifikasi Section */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-primary/10 text-primary text-sm">Legalitas & Sertifikasi</Badge>
                <h3 className="text-3xl font-bold text-foreground mb-4">Terdaftar & Tersertifikasi</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Produk kami telah memiliki legalitas lengkap dan sertifikasi resmi untuk menjamin kualitas dan
                  keamanan
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-500/10 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-card-foreground">Sertifikat P-IRT</h5>
                        <p className="text-sm text-muted-foreground">Industri Rumah Tangga</p>
                      </div>
                    </div>
                    <p className="text-sm font-mono bg-muted/50 p-2 rounded text-center">2113212010651-29</p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-500/10 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                        <Shield className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-card-foreground">ID Halal</h5>
                        <p className="text-sm text-muted-foreground">Sertifikat Halal MUI</p>
                      </div>
                    </div>
                    <p className="text-sm font-mono bg-muted/50 p-2 rounded text-center">3211 0001 9024 30323</p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-500/10 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                        <Award className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-card-foreground">PB-UMKU</h5>
                        <p className="text-sm text-muted-foreground">Pembinaan UMKM</p>
                      </div>
                    </div>
                    <p className="text-xs font-mono bg-muted/50 p-2 rounded text-center">0220 0098 6192 9000 000 01</p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-500/10 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                        <CheckCircle className="h-6 w-6 text-purple-500" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-card-foreground">NIB</h5>
                        <p className="text-sm text-muted-foreground">Nomor Induk Berusaha</p>
                      </div>
                    </div>
                    <p className="text-sm font-mono bg-muted/50 p-2 rounded text-center">0220 0098 61929</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="produk" className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent text-accent-foreground text-base">Produk Unggulan</Badge>
              <h3 className="text-3xl font-bold text-card-foreground mb-4">Varian Kacang Bawang Pilihan</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tersedia dalam berbagai varian rasa dan kemasan untuk memenuhi selera dan kebutuhan Anda
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img src="/original-garlic-peanuts.png" alt="Kacang Bawang Original" className="rounded-lg mb-4" />
                  <CardTitle className="text-card-foreground text-center">Kacang Bawang Original</CardTitle>
                  <CardDescription>Rasa klasik dengan bumbu bawang yang gurih dan renyah</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    {/* <span className="text-2xl font-bold text-primary">Rp 25.000</span> */}
                    {/* <Badge variant="secondary">250g</Badge> */}
                  </div>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => openWhatsApp("Kacang Bawang Original")}
                  >
                    Pesan Sekarang
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img src="/spicy-garlic-peanuts-package.png" alt="Kacang Bawang Pedas" className="rounded-lg mb-4" />
                  <CardTitle className="text-card-foreground text-center">Kacang Bawang Pedas</CardTitle>
                  <CardDescription>Sensasi pedas yang menggigit dengan aroma bawang yang khas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    {/* <span className="text-2xl font-bold text-primary">Rp 27.000</span> */}
                    {/* <Badge variant="secondary">250g</Badge> */}
                  </div>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => openWhatsApp("Kacang Bawang Pedas")}
                  >
                    Pesan Sekarang
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img
                    src="/Jagung-garlic-peanuts-package.jpg"
                    alt="Kacang Bawang Premium"
                    className="rounded-lg mb-4"
                  />
                  <CardTitle className="text-card-foreground text-center">Kacang Bawang Jagung Manis</CardTitle>
                  <CardDescription>Kemasan eksklusif dengan kacang pilihan terbaik</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    {/* <span className="text-2xl font-bold text-primary">Rp 45.000</span> */}
                    {/* <Badge variant="secondary">500g</Badge>
                    <Badge variant="secondary">500g</Badge>
                    <Badge variant="secondary">500g</Badge> */}
                  </div>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => openWhatsApp("Kacang Bawang Jagung Manis")}
                  >
                    Pesan Sekarang
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comprehensive Product Catalog Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-10">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-muted text-muted-foreground leading-7 tracking-normal text-base">
                Katalog Lengkap
              </Badge>
              <h3 className="text-3xl font-bold text-foreground mb-4">Semua Produk Kami</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Jelajahi koleksi lengkap produk berkualitas tinggi dari Kacang Bawang Ibu Rus
              </p>
            </div>

            {/* Kacang Bawang Section */}
            <div className="mb-16">
              <h4 className="text-2xl font-bold text-foreground mb-8 text-center">🥜 Kacang Bawang</h4>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                
                {/* bestseller */}
                <Card className="bg-card border-border">
                  <CardHeader className="pb-4">
                    <ProductCarousel images={BestSellerImages} alt="Kacang Bawang Original" />
                    <CardTitle className="text-lg text-card-foreground text-center">Bestseller</CardTitle>
                    <CardDescription className="text-sm">Favorit semua orang! Renyah, gurih, dan bikin nagih. Cocok untuk teman santai maupun suguhan spesial keluarga.</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Kemasan:</span>
                        <span className="text-card-foreground">Toples Bulat</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Harga:</span>
                        <span className="text-card-foreground">Hubungi Kami</span>
                      </div>
 
                    </div>
                    <Button
                      className="w-full mt-4 bg-primary hover:bg-primary/90"
                      onClick={() => openWhatsApp("Kacang Bawang Original")}
                    >
                      Pesan Sekarang
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Rasa Original */}
                <Card className="bg-card border-border">
                  <CardHeader className="pb-4">
                    <ProductCarousel images={kacangBawangOriginalImages} alt="Kacang Bawang Original" />
                    <CardTitle className="text-lg text-card-foreground text-center">Original</CardTitle>
                    <CardDescription className="text-sm">Rasa klasik gurih bawang</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Toples Tabung:</span>
                        <span className="text-card-foreground">200g, 300g, 400g, 500g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Toples Bulat:</span>
                        <span className="text-card-foreground">200g - 1000g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Kemasan Pouch:</span>
                        <span className="text-card-foreground">200g, 500g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Ball-ballan:</span>
                        <span className="text-card-foreground">10kg</span>
                      </div>
                    </div>
                    <Button
                      className="w-full mt-4 bg-primary hover:bg-primary/90"
                      onClick={() => openWhatsApp("Kacang Bawang Original")}
                    >
                      Pesan Sekarang
                    </Button>
                  </CardContent>
                </Card>

                {/* Rasa Balado Pedas */}
                <Card className="bg-card border-border">
                  <CardHeader className="pb-4">
                    <ProductCarousel images={kacangBawangBaladoImages} alt="Kacang Bawang Balado" />
                    <CardTitle className="text-lg text-card-foreground text-center">Balado Pedas</CardTitle>
                    <CardDescription className="text-sm">Sensasi pedas balado yang menggigit</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Toples Tabung:</span>
                        <span className="text-card-foreground">200g, 300g, 400g, 500g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Toples Bulat:</span>
                        <span className="text-card-foreground">200g - 1000g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Kemasan Pouch:</span>
                        <span className="text-card-foreground">200g, 500g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Ball-ballan:</span>
                        <span className="text-card-foreground">10kg</span>
                      </div>
                    </div>
                    <Button
                      className="w-full mt-4 bg-primary hover:bg-primary/90"
                      onClick={() => openWhatsApp("Kacang Bawang Balado Pedas")}
                    >
                      Pesan Sekarang
                    </Button>
                  </CardContent>
                </Card>

                {/* Rasa Jagung Manis */}
                <Card className="bg-card border-border">
                  <CardHeader className="pb-4">
                    <ProductCarousel images={kacangBawangJagungImages} alt="Kacang Bawang Jagung Manis" />
                    <CardTitle className="text-lg text-card-foreground text-center">Jagung Manis</CardTitle>
                    <CardDescription className="text-sm">Perpaduan manis jagung yang unik</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Toples Tabung:</span>
                        <span className="text-card-foreground">200g, 300g, 400g, 500g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Toples Bulat:</span>
                        <span className="text-card-foreground">200g - 1000g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Kemasan Pouch:</span>
                        <span className="text-card-foreground">200g, 500g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Ball-ballan:</span>
                        <span className="text-card-foreground">10kg</span>
                      </div>
                    </div>
                    <Button
                      className="w-full mt-4 bg-primary hover:bg-primary/90"
                      onClick={() => openWhatsApp("Kacang Bawang Jagung Manis")}
                    >
                      Pesan Sekarang
                    </Button>
                  </CardContent>
                </Card>

                {/* Pack 1000-an */}
                <Card className="bg-card border-border">
                  <CardHeader className="pb-4">
                    <ProductCarousel images={packEkonomisImages} alt="Kacang Bawang Pack" />
                    <CardTitle className="text-lg text-card-foreground text-center">Pack Ekonomis</CardTitle>
                    <CardDescription className="text-sm">Kemasan hemat untuk kebutuhan besar</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Pack 1000-an:</span>
                        <span className="text-card-foreground">Semua rasa</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Cocok untuk:</span>
                        <span className="text-card-foreground">Reseller, Event</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Harga:</span>
                        <span className="text-card-foreground">Hubungi kami</span>
                      </div>
                    </div>
                    <Button
                      className="w-full mt-4 bg-primary hover:bg-primary/90"
                      onClick={() => openWhatsApp("Pack Ekonomis Kacang Bawang")}
                    >
                      Pesan Sekarang
                    </Button>
                  </CardContent>
                </Card>

                {/* Basreng */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <ProductCarousel images={basrengImages} alt="Basreng" />
                    <CardTitle className="text-xl text-card-foreground text-center">🔥 Basreng</CardTitle>
                    <CardDescription>Bakso goreng renyah dan gurih</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Rasa Original:</span>
                        <span className="text-card-foreground">Tersedia</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Rasa Pedas:</span>
                        <span className="text-card-foreground">Tersedia</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Harga:</span>
                        <span className="text-card-foreground font-semibold">Hubungi kami</span>
                      </div>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => openWhatsApp("Basreng")}>
                      Pesan Sekarang
                    </Button>
                  </CardContent>
                </Card>

                {/* Kurma */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <ProductCarousel images={kurmaImages} alt="Kurma Premium" />
                    <CardTitle className="text-xl text-card-foreground text-center">🌴 Kurma</CardTitle>
                    <CardDescription>Kurma pilihan berkualitas tinggi</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Toples 400g:</span>
                        <span className="text-card-foreground font-semibold">Tersedia</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Toples 650g:</span>
                        <span className="text-card-foreground font-semibold">Tersedia</span>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => openWhatsApp("Kurma Premium")}
                    >
                      Pesan Sekarang
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Other Products Section */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              




            </div>

            {/* Hampers Section */}
            <div className="mt-16">
              <h4 className="text-2xl font-bold text-card-foreground mb-8 text-center">🎁 Paket Hampers</h4>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Hampers 3 Toples */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <ProductCarousel images={hampersImages1} alt="Hampers 3 Toples" />
                    <CardTitle className="text-xl text-card-foreground">Hampers 3 Toples</CardTitle>
                    <CardDescription>Paket hadiah istimewa dengan 3 varian rasa</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Isi:</span>
                        <span className="text-card-foreground">3 toples @ 250gr</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Varian:</span>
                        <span className="text-card-foreground">Original, Balado, Jagung</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Harga:</span>
                        <span className="text-card-foreground font-semibold">Hubungi Kami</span>
                      </div>
                    </div>
                    <Button
                      className="w-full mt-4 bg-primary hover:bg-primary/90"
                      onClick={() => openWhatsApp("Hampers 3 Toples")}
                    >
                      Pesan Hampers
                    </Button>
                  </CardContent>
                </Card>

                {/* Hampers 4 Toples */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <ProductCarousel images={hampersImages2} alt="Hampers 4 Toples" />
                    <CardTitle className="text-xl text-card-foreground">Hampers 4 Toples Premium</CardTitle>
                    <CardDescription>Paket lengkap dengan 4 varian termasuk kacang koro</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Isi:</span>
                        <span className="text-card-foreground">4 toples @ 250gr</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Varian:</span>
                        <span className="text-card-foreground">Original, Balado, Jagung, Koro</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Harga:</span>
                        <span className="text-card-foreground font-semibold">Hubungi Kami</span>
                      </div>
                    </div>
                    <Button
                      className="w-full mt-4 bg-primary hover:bg-primary/90"
                      onClick={() => openWhatsApp("Hampers 4 Toples Premium")}
                    >
                      Pesan Hampers
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Galeri Section */}
        <section id="galeri" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-muted text-muted-foreground text-base">Galeri</Badge>
              <h3 className="text-3xl font-bold text-foreground mb-4">Galeri Perusahaan</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Lihat aktivitas produksi, fasilitas, dan momen-momen penting dalam perjalanan UMKM Kacang Bawang Ibu Rus
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-96 md:h-[500px]">
                  {galleryImages[currentGalleryIndex].endsWith(".mp4") ? (
                    <video controls className="w-full h-auto object-contain bg-gray-100">
                      <source src={galleryImages[currentGalleryIndex]} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={galleryImages[currentGalleryIndex] || "/placeholder.svg"}
                      alt="Gallery Image"
                      className="w-full h-auto object-contain bg-gray-100"
                    />
                  )}

                  {/* Navigation Buttons */}
                  <button
                    onClick={() => setCurrentGalleryIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setCurrentGalleryIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 py-6 bg-white">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentGalleryIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentGalleryIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontak" className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent text-accent-foreground">Hubungi Kami</Badge>
              <h3 className="text-3xl font-bold text-card-foreground mb-4">Siap Melayani Pesanan Anda</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hubungi kami untuk pemesanan atau informasi lebih lanjut tentang produk kami
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-background border-border text-center">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Telepon</h4>
                  <p className="text-muted-foreground">+62 813-9566-7031</p>
                  <p className="text-muted-foreground">+62 852-1832-2789</p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border text-center">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <p className="text-muted-foreground">endahutami9@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="bg-background border-border text-center">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Alamat</h4>
                  <p className="text-muted-foreground">Jl. Raya Barat Karangampel No.52</p>
                  <p className="text-muted-foreground">Rt.05 Rw.01 Blok Desa, Ds. Dukuh tengah</p>
                  <p className="text-muted-foreground">Kec. Karangampel, Kabupaten Indramayu, Jawa Barat 45283</p>
                </CardContent>
              </Card>
            </div>

            {/* Google Maps Location Section */}
            <div className="mt-16">
              <h4 className="text-2xl font-bold text-card-foreground mb-8 text-center">Lokasi Kami</h4>
              <div className="max-w-4xl mx-auto">
                <Card className="bg-background border-border overflow-hidden">
                  <CardContent className="p-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.123456789!2d108.123456!3d-6.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1a2b3c4d5e6f%3A0x1234567890abcdef!2sGCMQ%2BMC%20Dukuhtengah%2C%20Kabupaten%20Indramayu%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lokasi Kacang Bawang Ibu Rus"
                    ></iframe>
                  </CardContent>
                </Card>
                <div className="text-center mt-4">
                  <Button
                    variant="outline"
                    onClick={() => window.open("https://maps.app.goo.gl/cJNcXw9FUGtpPR9B9", "_blank")}
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Buka di Google Maps
                  </Button>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="mt-16">
              <h4 className="text-2xl font-bold text-card-foreground mb-8 text-center">Ikuti Media Sosial Kami</h4>
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {/* Facebook */}
                <Card className="bg-background border-border text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="bg-blue-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Facebook className="h-8 w-8 text-blue-500" />
                    </div>
                    <h5 className="font-semibold text-foreground mb-2">Facebook</h5>
                    <p className="text-muted-foreground text-sm mb-4">Endah Utami</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open("https://www.facebook.com/endah.utami2", "_blank")}
                    >
                      Kunjungi
                    </Button>
                  </CardContent>
                </Card>

                {/* Instagram */}
                <Card className="bg-background border-border text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="bg-pink-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Instagram className="h-8 w-8 text-pink-500" />
                    </div>
                    <h5 className="font-semibold text-foreground mb-2">Instagram</h5>
                    <p className="text-muted-foreground text-sm mb-4">@kacangiburus</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open("https://instagram.com/kacangiburus", "_blank")}
                    >
                      Follow
                    </Button>
                  </CardContent>
                </Card>

                {/* WhatsApp */}
                <Card className="bg-background border-border text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="bg-green-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-8 w-8 text-green-500" />
                    </div>
                    <h5 className="font-semibold text-foreground mb-2">WhatsApp</h5>
                    <p className="text-muted-foreground text-sm mb-4">+62 813-9566-7031</p>
                    <Button variant="outline" size="sm" onClick={() => openWhatsApp()}>
                      Chat
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => openWhatsApp()}
              >
                <Phone className="mr-2 h-5 w-5" />
                Hubungi Sekarang
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground text-background py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-header-ztfihwVDknWo8FlkQE0KNMoxcnLV65.png"
                      alt="Kacang Bawang Ibu Rus Logo"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <span className="font-bold">Kacang Bawang Ibu Rus</span>
                </div>
                <p className="text-sm opacity-80">
                  Menghadirkan cita rasa tradisional Indonesia dengan kualitas terbaik sejak 2015.
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Produk</h5>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>Kacang Bawang Original</li>
                  <li>Kacang Bawang Balado Pedas</li>
                  <li>Kacang Bawang Jagung Manis</li>
                  <li>Basreng</li>
                  <li>Kurma</li>
                  <li>Hampers Kacang Bawang</li>
                </ul>
              </div>

              {/*<div>
                <h5 className="font-semibold mb-4">Perusahaan</h5>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>Tentang Kami</li>
                  <li>Legalitas & Sertifikasi</li>
                  <li>Produk Unggulan</li>
                  <li>Katalog Lengkap</li>
                  <li>Galeri</li>
                  <li>Kontak</li>
                </ul>
              </div>*/}

              <div>
                <h5 className="font-semibold mb-4">Legalitas & Sertifikasi</h5>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>P-IRT NO.2113212010651-29</li>
                  <li>Id Halal : 3211 0001 9024 30323</li>
                  <li>PB-UMKU : 0220 0098 6192 9000 000 01n</li>
                  <li>NIB : 0220 0098 61929</li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold mb-4">Ikuti Kami</h5>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>Facebook: Endah Utami</li>
                  <li>Instagram: @kacangiburus</li>
                  <li>WhatsApp: +62 813-9566-7031</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
              <p>&copy; 2025 Kacang Bawang Ibu Rus. Semua hak dilindungi.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
