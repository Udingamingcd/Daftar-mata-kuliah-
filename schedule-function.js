// Fungsi untuk menampilkan jadwal berdasarkan kelas yang dipilih
function showSchedule(className) {
	const scheduleBody = document.getElementById('schedule-body');
	scheduleBody.innerHTML = '';
	
	if (!className) {
		scheduleBody.innerHTML = '<tr><td colspan="6" class="empty-cell">Silakan pilih kelas untuk menampilkan jadwal</td></tr>';
		return;
	}
	
	const classSchedule = scheduleData[className];
	
	if (!classSchedule || classSchedule.length === 0) {
		scheduleBody.innerHTML = '<tr><td colspan="6" class="empty-cell">Tidak ada jadwal untuk kelas ini</td></tr>';
		return;
	}
	
	// Urutkan jadwal berdasarkan hari dan jam
	const daysOrder = ["SENIN", "SELASA", "RABU", "KAMIS", "JUMAT"];
	classSchedule.sort((a, b) => {
		const dayCompare = daysOrder.indexOf(a.hari) - daysOrder.indexOf(b.hari);
		if (dayCompare !== 0) return dayCompare;
		return a.jamKe - b.jamKe;
	});
	
	let currentDay = '';
	
	classSchedule.forEach(item => {
		if (item.hari !== currentDay) {
			currentDay = item.hari;
			// Tambahkan header hari
			const dayHeader = document.createElement('tr');
			dayHeader.innerHTML = `<td colspan="6" style="background-color: #e9ecef; font-weight: bold; padding: 10px;">${currentDay}</td>`;
			scheduleBody.appendChild(dayHeader);
		}
		
		const row = document.createElement('tr');
		row.innerHTML = `
            <td>${item.hari}</td>
            <td class="time-cell">${item.jamKe}</td>
            <td>${item.waktu}</td>
            <td>
                <div class="subject">${item.mataKuliah}</div>
            </td>
            <td>
                <div class="lecturer">${item.dosen}</div>
            </td>
            <td>
                <div class="room">${item.ruang}</div>
            </td>
        `;
		scheduleBody.appendChild(row);
	});
}

// Event listener untuk dropdown
document.getElementById('class-select').addEventListener('change', function() {
	showSchedule(this.value);
});

// Inisialisasi
showSchedule('');