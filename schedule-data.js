// Data jadwal berdasarkan kelas
const scheduleData = {
	"1A": [
		// SENIN
		{ hari: "SENIN", jamKe: 2, waktu: "08.20 - 09.10", mataKuliah: "Algoritma Pemrograman (T)", dosen: "Novi Efendi,S.Pd.,M.Kom", ruang: "Ruang Serbaguna" },
		{ hari: "SENIN", jamKe: 3, waktu: "09.10 - 10.00", mataKuliah: "Algoritma Pemrograman (T)", dosen: "Novi Efendi,S.Pd.,M.Kom", ruang: "Ruang Serbaguna" },
		{ hari: "SENIN", jamKe: 4, waktu: "10.00 - 10.50", mataKuliah: "Algoritma Pemrograman (T)", dosen: "Novi Efendi,S.Pd.,M.Kom", ruang: "Ruang Serbaguna" },
		{ hari: "SENIN", jamKe: 5, waktu: "10.50 - 11.40", mataKuliah: "Matematika", dosen: "Dedi Mardianto,Spd.,M.Pd", ruang: "Ruang Serbaguna" },
		{ hari: "SENIN", jamKe: 6, waktu: "11.40 - 12.30", mataKuliah: "Matematika", dosen: "Dedi Mardianto,Spd.,M.Pd", ruang: "Ruang Serbaguna" },
		{ hari: "SENIN", jamKe: 7, waktu: "13.10 - 14.00", mataKuliah: "Sistem Informasi (T)", dosen: "Riyang Gumelta,S.Kom.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "SENIN", jamKe: 8, waktu: "14.00 - 14.50", mataKuliah: "Sistem Informasi (T)", dosen: "Riyang Gumelta,S.Kom.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "SENIN", jamKe: 9, waktu: "14.50 - 15.40", mataKuliah: "Sistem Informasi (T)", dosen: "Riyang Gumelta,S.Kom.,M.Kom", ruang: "Labor Jaringan" },
		
		// SELASA
		{ hari: "SELASA", jamKe: 2, waktu: "08.20 - 09.10", mataKuliah: "Algoritma Pemrograman (P)", dosen: "Novi Efendi,S.Pd.,M.Kom, Yulia Jihan SY,S.Kom.,M.kom", ruang: "Labor Multimedia" },
		{ hari: "SELASA", jamKe: 3, waktu: "09.10 - 10.00", mataKuliah: "Algoritma Pemrograman (P)", dosen: "Novi Efendi,S.Pd.,M.Kom, Yulia Jihan SY,S.Kom.,M.kom", ruang: "Labor Multimedia" },
		{ hari: "SELASA", jamKe: 4, waktu: "10.00 - 10.50", mataKuliah: "Algoritma Pemrograman (P)", dosen: "Novi Efendi,S.Pd.,M.Kom, Yulia Jihan SY,S.Kom.,M.kom", ruang: "Labor Multimedia" },
		{ hari: "SELASA", jamKe: 5, waktu: "10.50 - 11.40", mataKuliah: "Algoritma Pemrograman (P)", dosen: "Novi Efendi,S.Pd.,M.Kom, Yulia Jihan SY,S.Kom.,M.kom", ruang: "Labor Multimedia" },
		{ hari: "SELASA", jamKe: 8, waktu: "14.00 - 14.50", mataKuliah: "Agama", dosen: "Sri Handayani,S.Pd.,M.Pd", ruang: "Ruang Serbaguna" },
		{ hari: "SELASA", jamKe: 9, waktu: "14.50 - 15.40", mataKuliah: "Agama", dosen: "Sri Handayani,S.Pd.,M.Pd", ruang: "Ruang Serbaguna" },
		
		// RABU
		{ hari: "RABU", jamKe: 2, waktu: "08.20 - 09.10", mataKuliah: "Pengantar Teknologi Informasi", dosen: "Widya Wahyuni,S.Pd.,M.Kom", ruang: "Ruang Serbaguna" },
		{ hari: "RABU", jamKe: 3, waktu: "09.10 - 10.00", mataKuliah: "Pengantar Teknologi Informasi", dosen: "Widya Wahyuni,S.Pd.,M.Kom", ruang: "Ruang Serbaguna" },
		{ hari: "RABU", jamKe: 7, waktu: "13.10 - 14.00", mataKuliah: "Keterampilan Komputer (P)", dosen: "Ideva Gaputra,S.Kom.,M.kom, M.Ibrahim N S.Pd.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "RABU", jamKe: 8, waktu: "14.00 - 14.50", mataKuliah: "Keterampilan Komputer (P)", dosen: "Ideva Gaputra,S.Kom.,M.kom, M.Ibrahim N S.Pd.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "RABU", jamKe: 9, waktu: "14.50 - 15.40", mataKuliah: "Keterampilan Komputer (P)", dosen: "Ideva Gaputra,S.Kom.,M.kom, M.Ibrahim N S.Pd.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "RABU", jamKe: 10, waktu: "15.40 - 16.30", mataKuliah: "Keterampilan Komputer (P)", dosen: "Ideva Gaputra,S.Kom.,M.kom, M.Ibrahim N S.Pd.,M.Kom", ruang: "Labor Jaringan" },
		
		// KAMIS
		{ hari: "KAMIS", jamKe: 2, waktu: "08.20 - 09.10", mataKuliah: "Bahasa Inggris", dosen: "Yona", ruang: "Ruang Serbaguna" },
		{ hari: "KAMIS", jamKe: 3, waktu: "09.10 - 10.00", mataKuliah: "Bahasa Inggris", dosen: "Yona", ruang: "Ruang Serbaguna" },
		
		// JUMAT
		{ hari: "JUMAT", jamKe: 2, waktu: "08.20 - 09.10", mataKuliah: "Kesehatan dan Keselamatan Kerja", dosen: "Ikhsan Yusda", ruang: "Ruang Serbaguna" },
		{ hari: "JUMAT", jamKe: 3, waktu: "09.10 - 10.00", mataKuliah: "Kesehatan dan Keselamatan Kerja", dosen: "Ikhsan Yusda", ruang: "Ruang Serbaguna" }
	],
	
	"1B": [
		// SENIN
		{ hari: "SENIN", jamKe: 2, waktu: "08.20 - 09.10", mataKuliah: "Matematika", dosen: "Dedi Mardianto,Spd.,M.Pd", ruang: "Ruang Serbaguna" },
		{ hari: "SENIN", jamKe: 3, waktu: "09.10 - 10.00", mataKuliah: "Matematika", dosen: "Dedi Mardianto,Spd.,M.Pd", ruang: "Ruang Serbaguna" },
		{ hari: "SENIN", jamKe: 4, waktu: "10.00 - 10.50", mataKuliah: "Sistem Informasi (T)", dosen: "Riyang Gumelta,S.Kom.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "SENIN", jamKe: 5, waktu: "10.50 - 11.40", mataKuliah: "Sistem Informasi (T)", dosen: "Riyang Gumelta,S.Kom.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "SENIN", jamKe: 6, waktu: "11.40 - 12.30", mataKuliah: "Sistem Informasi (T)", dosen: "Riyang Gumelta,S.Kom.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "SENIN", jamKe: 7, waktu: "13.10 - 14.00", mataKuliah: "Algoritma Pemrograman (T)", dosen: "Widya Wahyuni,S.Pd.,M.Kom", ruang: "Ruang Serbaguna" },
		{ hari: "SENIN", jamKe: 8, waktu: "14.00 - 14.50", mataKuliah: "Algoritma Pemrograman (T)", dosen: "Widya Wahyuni,S.Pd.,M.Kom", ruang: "Ruang Serbaguna" },
		{ hari: "SENIN", jamKe: 9, waktu: "14.50 - 15.40", mataKuliah: "Algoritma Pemrograman (T)", dosen: "Widya Wahyuni,S.Pd.,M.Kom", ruang: "Ruang Serbaguna" },
		
		// SELASA
		{ hari: "SELASA", jamKe: 2, waktu: "08.20 - 09.10", mataKuliah: "Pengantar Teknologi Informasi", dosen: "Widya Wahyuni,S.Pd.,M.Kom", ruang: "Ruang Serbaguna" },
		{ hari: "SELASA", jamKe: 3, waktu: "09.10 - 10.00", mataKuliah: "Pengantar Teknologi Informasi", dosen: "Widya Wahyuni,S.Pd.,M.Kom", ruang: "Ruang Serbaguna" },
		{ hari: "SELASA", jamKe: 7, waktu: "13.10 - 14.00", mataKuliah: "Algoritma Pemrograman (P)", dosen: "Widya Wahyuni,S.Pd.,M.Kom, Novi Efendi,S.Pd.,M.Kom", ruang: "Labor Multimedia" },
		{ hari: "SELASA", jamKe: 8, waktu: "14.00 - 14.50", mataKuliah: "Algoritma Pemrograman (P)", dosen: "Widya Wahyuni,S.Pd.,M.Kom, Novi Efendi,S.Pd.,M.Kom", ruang: "Labor Multimedia" },
		{ hari: "SELASA", jamKe: 9, waktu: "14.50 - 15.40", mataKuliah: "Algoritma Pemrograman (P)", dosen: "Widya Wahyuni,S.Pd.,M.Kom, Novi Efendi,S.Pd.,M.Kom", ruang: "Labor Multimedia" },
		{ hari: "SELASA", jamKe: 10, waktu: "15.40 - 16.30", mataKuliah: "Algoritma Pemrograman (P)", dosen: "Widya Wahyuni,S.Pd.,M.Kom, Novi Efendi,S.Pd.,M.Kom", ruang: "Labor Multimedia" },
		
		// RABU
		{ hari: "RABU", jamKe: 3, waktu: "09.10 - 10.00", mataKuliah: "Keterampilan Komputer (P)", dosen: "Ideva Gaputra,S.Kom.,M.kom, Novi Efendi,S.Pd.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "RABU", jamKe: 4, waktu: "10.00 - 10.50", mataKuliah: "Keterampilan Komputer (P)", dosen: "Ideva Gaputra,S.Kom.,M.kom, Novi Efendi,S.Pd.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "RABU", jamKe: 5, waktu: "10.50 - 11.40", mataKuliah: "Keterampilan Komputer (P)", dosen: "Ideva Gaputra,S.Kom.,M.kom, Novi Efendi,S.Pd.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "RABU", jamKe: 6, waktu: "11.40 - 12.30", mataKuliah: "Keterampilan Komputer (P)", dosen: "Ideva Gaputra,S.Kom.,M.kom, Novi Efendi,S.Pd.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "RABU", jamKe: 8, waktu: "14.00 - 14.50", mataKuliah: "Agama", dosen: "Sri Handayani,S.Pd.,M.Pd", ruang: "Ruang Serbaguna" },
		{ hari: "RABU", jamKe: 9, waktu: "14.50 - 15.40", mataKuliah: "Agama", dosen: "Sri Handayani,S.Pd.,M.Pd", ruang: "Ruang Serbaguna" },
		
		// JUMAT
		{ hari: "JUMAT", jamKe: 4, waktu: "10.00 - 10.50", mataKuliah: "Kesehatan dan Keselamatan Kerja", dosen: "Ikhsan Yusda", ruang: "Ruang Serbaguna" },
		{ hari: "JUMAT", jamKe: 5, waktu: "10.50 - 11.40", mataKuliah: "Kesehatan dan Keselamatan Kerja", dosen: "Ikhsan Yusda", ruang: "Ruang Serbaguna" },
		
		// KAMIS
		{ hari: "KAMIS", jamKe: 8, waktu: "14.00 - 14.50", mataKuliah: "Bahasa Inggris", dosen: "Yona", ruang: "Ruang Serbaguna" },
		{ hari: "KAMIS", jamKe: 9, waktu: "14.50 - 15.40", mataKuliah: "Bahasa Inggris", dosen: "Yona", ruang: "Ruang Serbaguna" }
	],
	
	"2A": [
		// SENIN
		{ hari: "SENIN", jamKe: 1, waktu: "07.30 - 08.20", mataKuliah: "Jaringan Komputer (Teori)", dosen: "Ardi Syawaldipa, S.Kom.,M.T, M.IBRAHIM NASUTION,S.Pd.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "SENIN", jamKe: 2, waktu: "08.20 - 09.10", mataKuliah: "Jaringan Komputer (Teori)", dosen: "Ardi Syawaldipa, S.Kom.,M.T, M.IBRAHIM NASUTION,S.Pd.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "SENIN", jamKe: 3, waktu: "09.10 - 10.00", mataKuliah: "Jaringan Komputer", dosen: "Ardi Syawaldipa, S.Kom.,M.T, M.IBRAHIM NASUTION,S.Pd.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "SENIN", jamKe: 4, waktu: "10.00 - 10.50", mataKuliah: "Jaringan Komputer", dosen: "Ardi Syawaldipa, S.Kom.,M.T, M.IBRAHIM NASUTION,S.Pd.,M.Kom", ruang: "Labor Jaringan" },
		
		// SELASA
		{ hari: "SELASA", jamKe: 4, waktu: "10.00 - 10.50", mataKuliah: "Kewarganegaraan", dosen: "Ikhsan Yusda", ruang: "Ruang Serbaguna" },
		{ hari: "SELASA", jamKe: 5, waktu: "10.50 - 11.40", mataKuliah: "Kewarganegaraan", dosen: "Ikhsan Yusda", ruang: "Ruang Serbaguna" },
		{ hari: "SELASA", jamKe: 7, waktu: "13.10 - 14.00", mataKuliah: "Web Dinamis", dosen: "Riyang Gumelta,S.Kom.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "SELASA", jamKe: 8, waktu: "14.00 - 14.50", mataKuliah: "Web Dinamis", dosen: "Riyang Gumelta,S.Kom.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "SELASA", jamKe: 9, waktu: "14.50 - 15.40", mataKuliah: "Web Dinamis", dosen: "Riyang Gumelta,S.Kom.,M.Kom", ruang: "Labor Jaringan" },
		
		// RABU
		{ hari: "RABU", jamKe: 3, waktu: "09.10 - 10.00", mataKuliah: "Pemrograman Mobile (T)", dosen: "Ulia Ulfa,S.Kom.,M.Kom, Nadila C Putri", ruang: "Labor Multimedia" },
		{ hari: "RABU", jamKe: 4, waktu: "10.00 - 10.50", mataKuliah: "Pemrograman Mobile (T)", dosen: "Ulia Ulfa,S.Kom.,M.Kom, Nadila C Putri", ruang: "Labor Multimedia" },
		{ hari: "RABU", jamKe: 5, waktu: "10.50 - 11.40", mataKuliah: "Pemrograman Mobile (P)", dosen: "Ulia Ulfa,S.Kom.,M.Kom, Nadila C Putri", ruang: "Labor Multimedia" },
		{ hari: "RABU", jamKe: 6, waktu: "11.40 - 12.30", mataKuliah: "Pemrograman Mobile (P)", dosen: "Ulia Ulfa,S.Kom.,M.Kom, Nadila C Putri", ruang: "Labor Multimedia" },
		{ hari: "RABU", jamKe: 7, waktu: "13.10 - 14.00", mataKuliah: "Analisa dan Perancangan Sistem Informasi", dosen: "Novi Efendi,S.Pd.,M.Kom", ruang: "Ruang Serbaguna" },
		{ hari: "RABU", jamKe: 8, waktu: "14.00 - 14.50", mataKuliah: "Analisa dan Perancangan Sistem Informasi", dosen: "Novi Efendi,S.Pd.,M.Kom", ruang: "Ruang Serbaguna" },
		{ hari: "RABU", jamKe: 9, waktu: "14.50 - 15.40", mataKuliah: "Analisa dan Perancangan Sistem Informasi", dosen: "Novi Efendi,S.Pd.,M.Kom", ruang: "Ruang Serbaguna" },
		
		// KAMIS
		{ hari: "KAMIS", jamKe: 3, waktu: "09.10 - 10.00", mataKuliah: "Interaksi Manusia dan Komputer (T)", dosen: "Ulia Ulfa,S.Kom.,M.Kom, Nusrito Zalins Adekory, S.St., M.Ds", ruang: "Labor Multimedia" },
		{ hari: "KAMIS", jamKe: 4, waktu: "10.00 - 10.50", mataKuliah: "Interaksi Manusia dan Komputer (T)", dosen: "Ulia Ulfa,S.Kom.,M.Kom, Nusrito Zalins Adekory, S.St., M.Ds", ruang: "Labor Multimedia" },
		{ hari: "KAMIS", jamKe: 5, waktu: "10.50 - 11.40", mataKuliah: "Interaksi Manusia dan Komputer (P)", dosen: "Ulia Ulfa,S.Kom.,M.Kom, Nusrito Zalins Adekory, S.St., M.Ds", ruang: "Labor Multimedia" },
		{ hari: "KAMIS", jamKe: 6, waktu: "11.40 - 12.30", mataKuliah: "Interaksi Manusia dan Komputer (P)", dosen: "Ulia Ulfa,S.Kom.,M.Kom, Nusrito Zalins Adekory, S.St., M.Ds", ruang: "Labor Multimedia" },
		{ hari: "KAMIS", jamKe: 7, waktu: "13.10 - 14.00", mataKuliah: "Bahasa Inggris Profesi", dosen: "Yona", ruang: "Ruang Serbaguna" },
		{ hari: "KAMIS", jamKe: 8, waktu: "14.00 - 14.50", mataKuliah: "Bahasa Inggris Profesi", dosen: "Yona", ruang: "Ruang Serbaguna" },
		
		// JUMAT
		{ hari: "JUMAT", jamKe: 1, waktu: "07.30 - 08.20", mataKuliah: "Desain Antar Muka (T)", dosen: "Widya Wahyuni,S.Pd.,M.Kom, Nusrito Zalins Adekory, S.St., M.Ds", ruang: "Labor Multimedia" },
		{ hari: "JUMAT", jamKe: 2, waktu: "08.20 - 09.10", mataKuliah: "Desain Antar Muka (T)", dosen: "Widya Wahyuni,S.Pd.,M.Kom, Nusrito Zalins Adekory, S.St., M.Ds", ruang: "Labor Multimedia" },
		{ hari: "JUMAT", jamKe: 3, waktu: "09.10 - 10.00", mataKuliah: "Desain Antar Muka (T)", dosen: "Widya Wahyuni,S.Pd.,M.Kom, Nusrito Zalins Adekory, S.St., M.Ds", ruang: "Labor Multimedia" }
	],
	
	"2B": [
		// SENIN
		{ hari: "SENIN", jamKe: 1, waktu: "07.30 - 08.20", mataKuliah: "Analisis dan Perancangan Sistem Informasi", dosen: "Riyang Gumelta,S.Kom.,M.kom", ruang: "Labor Multimedia" },
		{ hari: "SENIN", jamKe: 2, waktu: "08.20 - 09.10", mataKuliah: "Analisis dan Perancangan Sistem Informasi", dosen: "Riyang Gumelta,S.Kom.,M.kom", ruang: "Labor Multimedia" },
		{ hari: "SENIN", jamKe: 3, waktu: "09.10 - 10.00", mataKuliah: "Analisis dan Perancangan Sistem Informasi", dosen: "Riyang Gumelta,S.Kom.,M.kom", ruang: "Labor Multimedia" },
		{ hari: "SENIN", jamKe: 7, waktu: "13.10 - 14.00", mataKuliah: "Jaringan Komputer (Teori)", dosen: "Ardi Syawaldipa,S.Pd.,M.kom, M.IBRAHIM NASUTION,S.Pd.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "SENIN", jamKe: 8, waktu: "14.00 - 14.50", mataKuliah: "Jaringan Komputer (Teori)", dosen: "Ardi Syawaldipa,S.Pd.,M.kom, M.IBRAHIM NASUTION,S.Pd.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "SENIN", jamKe: 9, waktu: "14.50 - 15.40", mataKuliah: "Jaringan Komputer", dosen: "Ardi Syawaldipa,S.Pd.,M.kom, M.IBRAHIM NASUTION,S.Pd.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "SENIN", jamKe: 10, waktu: "15.40 - 16.30", mataKuliah: "Jaringan Komputer", dosen: "Ardi Syawaldipa,S.Pd.,M.kom, M.IBRAHIM NASUTION,S.Pd.,M.Kom", ruang: "Labor Jaringan" },
		
		// SELASA
		{ hari: "SELASA", jamKe: 4, waktu: "10.00 - 10.50", mataKuliah: "Web Dinamis", dosen: "Riyang Gumelta,S.Kom.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "SELASA", jamKe: 5, waktu: "10.50 - 11.40", mataKuliah: "Web Dinamis", dosen: "Riyang Gumelta,S.Kom.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "SELASA", jamKe: 6, waktu: "11.40 - 12.30", mataKuliah: "Web Dinamis", dosen: "Riyang Gumelta,S.Kom.,M.Kom", ruang: "Labor Jaringan" },
		{ hari: "SELASA", jamKe: 8, waktu: "14.00 - 14.50", mataKuliah: "Kewarganegaraan", dosen: "Ikhsan Yusda", ruang: "Ruang Serbaguna" },
		{ hari: "SELASA", jamKe: 9, waktu: "14.50 - 15.40", mataKuliah: "Kewarganegaraan", dosen: "Ikhsan Yusda", ruang: "Ruang Serbaguna" },
		
		// RABU
		{ hari: "RABU", jamKe: 7, waktu: "13.10 - 14.00", mataKuliah: "Pemrograman Mobile (T)", dosen: "Ulia Ulfa,S.Kom.,M.Kom, Nadila C Putri", ruang: "Labor Multimedia" },
		{ hari: "RABU", jamKe: 8, waktu: "14.00 - 14.50", mataKuliah: "Pemrograman Mobile (T)", dosen: "Ulia Ulfa,S.Kom.,M.Kom, Nadila C Putri", ruang: "Labor Multimedia" },
		{ hari: "RABU", jamKe: 9, waktu: "14.50 - 15.40", mataKuliah: "Pemrograman Mobile (P)", dosen: "Ulia Ulfa,S.Kom.,M.Kom, Nadila C Putri", ruang: "Labor Multimedia" },
		{ hari: "RABU", jamKe: 10, waktu: "15.40 - 16.30", mataKuliah: "Pemrograman Mobile (P)", dosen: "Ulia Ulfa,S.Kom.,M.Kom, Nadila C Putri", ruang: "Labor Multimedia" },
		
		// KAMIS
		{ hari: "KAMIS", jamKe: 1, waktu: "07.30 - 08.20", mataKuliah: "Desain Antar Muka (T)", dosen: "Widya Wahyuni,S.Pd.,M.Kom, Nusrito Marawa", ruang: "Labor Multimedia" },
		{ hari: "KAMIS", jamKe: 2, waktu: "08.20 - 09.10", mataKuliah: "Desain Antar Muka (T)", dosen: "Widya Wahyuni,S.Pd.,M.Kom, Nusrito Marawa", ruang: "Labor Multimedia" },
		{ hari: "KAMIS", jamKe: 3, waktu: "09.10 - 10.00", mataKuliah: "Desain Antar Muka (T)", dosen: "Widya Wahyuni,S.Pd.,M.Kom, Nusrito Marawa", ruang: "Labor Multimedia" },
		{ hari: "KAMIS", jamKe: 7, waktu: "13.10 - 14.00", mataKuliah: "Interaksi Manusia dan Komputer (T)", dosen: "Widya Wahyuni,S.Pd.,M.Kom, Nusrito Marawa", ruang: "Labor Multimedia" },
		{ hari: "KAMIS", jamKe: 8, waktu: "14.00 - 14.50", mataKuliah: "Interaksi Manusia dan Komputer (T)", dosen: "Widya Wahyuni,S.Pd.,M.Kom, Nusrito Marawa", ruang: "Labor Multimedia" },
		{ hari: "KAMIS", jamKe: 9, waktu: "14.50 - 15.40", mataKuliah: "Interaksi Manusia dan Komputer (P)", dosen: "Widya Wahyuni,S.Pd.,M.Kom, Nusrito Marawa", ruang: "Labor Multimedia" },
		{ hari: "KAMIS", jamKe: 10, waktu: "15.40 - 16.30", mataKuliah: "Interaksi Manusia dan Komputer (P)", dosen: "Widya Wahyuni,S.Pd.,M.Kom, Nusrito Marawa", ruang: "Labor Multimedia" },
		{ hari: "KAMIS", jamKe: 5, waktu: "10.50 - 11.40", mataKuliah: "Bahasa Inggris Profesi", dosen: "Yona", ruang: "Ruang Serbaguna" },
		{ hari: "KAMIS", jamKe: 6, waktu: "11.40 - 12.30", mataKuliah: "Bahasa Inggris Profesi", dosen: "Yona", ruang: "Ruang Serbaguna" }
	],
	
	"3": [
		// SENIN
		{ hari: "SENIN", jamKe: 1, waktu: "07.30 - 08.20", mataKuliah: "Pemrograman Mobile Lanjut (T)", dosen: "Ulia Ulfa,S.Kom.,M.Kom", ruang: "Labor Perakitan" },
		{ hari: "SENIN", jamKe: 2, waktu: "08.20 - 09.10", mataKuliah: "Pemrograman Mobile Lanjut (T)", dosen: "Ulia Ulfa,S.Kom.,M.Kom", ruang: "Labor Perakitan" },
		{ hari: "SENIN", jamKe: 3, waktu: "09.10 - 10.00", mataKuliah: "Keamanan Sistem Informasi (T)", dosen: "Ulia Ulfa,S.Kom.,M.Kom", ruang: "Labor Perakitan" },
		{ hari: "SENIN", jamKe: 4, waktu: "10.00 - 10.50", mataKuliah: "Keamanan Sistem Informasi (T)", dosen: "Ulia Ulfa,S.Kom.,M.Kom", ruang: "Labor Perakitan" },
		{ hari: "SENIN", jamKe: 5, waktu: "10.50 - 11.40", mataKuliah: "Keamanan Sistem Informasi (P)", dosen: "Ulia Ulfa,S.Kom.,M.Kom", ruang: "Labor Perakitan" },
		{ hari: "SENIN", jamKe: 6, waktu: "11.40 - 12.30", mataKuliah: "Keamanan Sistem Informasi (P)", dosen: "Ulia Ulfa,S.Kom.,M.Kom", ruang: "Labor Perakitan" },
		{ hari: "SENIN", jamKe: 7, waktu: "13.10 - 14.00", mataKuliah: "Pemrograman Mobile Lanjut (P)", dosen: "Ulia Ulfa,S.Kom.,M.Kom, Nadila C Putri", ruang: "Labor Multimedia" },
		{ hari: "SENIN", jamKe: 8, waktu: "14.00 - 14.50", mataKuliah: "Pemrograman Mobile Lanjut (P)", dosen: "Ulia Ulfa,S.Kom.,M.Kom, Nadila C Putri", ruang: "Labor Multimedia" },
		{ hari: "SENIN", jamKe: 9, waktu: "14.50 - 15.40", mataKuliah: "Pemrograman Mobile Lanjut (P)", dosen: "Ulia Ulfa,S.Kom.,M.Kom, Nadila C Putri", ruang: "Labor Multimedia" },
		{ hari: "SENIN", jamKe: 10, waktu: "15.40 - 16.30", mataKuliah: "Pemrograman Mobile Lanjut (P)", dosen: "Ulia Ulfa,S.Kom.,M.Kom, Nadila C Putri", ruang: "Labor Multimedia" },
		
		// SELASA
		{ hari: "SELASA", jamKe: 3, waktu: "09.10 - 10.00", mataKuliah: "Manajemen Proyek SI (T)", dosen: "M.IBRAHIM NASUTION,S.Pd.,M.Kom, ARIF NOFRIADI", ruang: "Labor Perakitan" },
		{ hari: "SELASA", jamKe: 4, waktu: "10.00 - 10.50", mataKuliah: "Manajemen Proyek SI (T)", dosen: "M.IBRAHIM NASUTION,S.Pd.,M.Kom, ARIF NOFRIADI", ruang: "Labor Perakitan" },
		{ hari: "SELASA", jamKe: 5, waktu: "10.50 - 11.40", mataKuliah: "Manajemen Proyek SI (P)", dosen: "M.IBRAHIM NASUTION,S.Pd.,M.Kom, ARIF NOFRIADI", ruang: "Labor Perakitan" },
		{ hari: "SELASA", jamKe: 6, waktu: "11.40 - 12.30", mataKuliah: "Manajemen Proyek SI (P)", dosen: "M.IBRAHIM NASUTION,S.Pd.,M.Kom, ARIF NOFRIADI", ruang: "Labor Perakitan" },
		
		// RABU
		{ hari: "RABU", jamKe: 2, waktu: "08.20 - 09.10", mataKuliah: "Etika Profesi", dosen: "Riyang Gumelta,S.Kom.,M.Kom", ruang: "Labor Perakitan" },
		{ hari: "RABU", jamKe: 3, waktu: "09.10 - 10.00", mataKuliah: "Etika Profesi", dosen: "Riyang Gumelta,S.Kom.,M.Kom", ruang: "Labor Perakitan" },
		
		// KAMIS
		{ hari: "KAMIS", jamKe: 7, waktu: "13.10 - 14.00", mataKuliah: "Sistem Enterprise (T)", dosen: "M.IBRAHIM NASUTION,S.Pd.,M.Kom, Harfebi Fryonanda ,M.kom", ruang: "Labor Perakitan" },
		{ hari: "KAMIS", jamKe: 8, waktu: "14.00 - 14.50", mataKuliah: "Sistem Enterprise (P)", dosen: "M.IBRAHIM NASUTION,S.Pd.,M.Kom, Harfebi Fryonanda ,M.kom", ruang: "Labor Perakitan" },
		{ hari: "KAMIS", jamKe: 9, waktu: "14.50 - 15.40", mataKuliah: "Sistem Enterprise (P)", dosen: "M.IBRAHIM NASUTION,S.Pd.,M.Kom, Harfebi Fryonanda ,M.kom", ruang: "Labor Perakitan" }
	]
};