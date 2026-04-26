export default async function handler(req, res) {
  // Mengambil URL dari Environment Variable Vercel (Rahasia)
  const SCRIPT_URL = process.env.SCRIPT_URL;
  
  // Menggabungkan parameter dari frontend (id, pass, action)
  const params = new URLSearchParams(req.query).toString();
  const finalUrl = `${https://script.google.com/macros/s/AKfycbw_9Nd7GkluT_WlUnAx2Rj4soPgyKwGpo6HLBumLHBuYxSTpqJUWhmaeZnryIcZZup8/exec}?${params}`;

  try {
    const response = await fetch(finalUrl);
    const data = await response.json();
    
    // Kirim hasil kembali ke web browser pelanggan
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ success: false, error: "Gagal menyambung ke server pusat." });
  }
}
