// Auto ambil order sebelum rider lain sempat lihat
function autoGrabOrder(order) {
    const lokasiKita = "Lokasi Anda"; // ganti dengan koordinat atau nama kawasan
    const radiusCek = 1.0; // km, sesuaikan radius deteksi

    if (order.lokasi.includes(lokasiKita) && order.jarak <= radiusCek) {
        if (order.status === "available") {
            ambilOrder(order.id);
            console.log("Order sudah diambil oleh anda sebelum rider lain.");
        }
    }
}

// Fungsi untuk simulasikan ambil order
function ambilOrder(orderId) {
    // Trigger API / simulate slide
    fetch("https://misi.app/order/grab", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ order_id: orderId })
    });
}
