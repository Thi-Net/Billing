export default async function handler(req, res) {
  // 1. Ambil URL dari Environment Vercel
  const SCRIPT_URL = process.env.SCRIPT_URL;

  // 2. CEK: Jika variabel kosong, kasih tahu kita lewat browser
  if (!SCRIPT_URL || SCRIPT_URL === "") {
    return res.status(500).json({ 
      success: false, 
      msg: "SERVER ERROR: Variabel SCRIPT_URL tidak terbaca di Vercel. Pastikan sudah input di Environment Variables dan sudah di-REDEPLOY.",
      debug_value: typeof SCRIPT_URL
    });
  }

  try {
    // 3. Bersihkan URL dari kemungkinan spasi atau tanda kutip bandel
    const cleanUrl = SCRIPT_URL.trim().replace(/['"]+/g, '');
    
    const params = new URLSearchParams(req.query).toString();
    const finalUrl = `${cleanUrl}?${params}`;

    // 4. Proses tembak ke Google
    const response = await fetch(finalUrl, {
      method: 'GET',
      redirect: 'follow'
    });

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    // 5. Jika masih Invalid URL, kita cetak error aslinya di sini
    res.status(500).json({ 
      success: false, 
      msg: "Invalid URL atau Koneksi Terputus", 
      error_detail: error.message,
      url_yang_dicoba: SCRIPT_URL ? SCRIPT_URL.substring(0, 20) + "..." : "KOSONG"
    });
  }
}
