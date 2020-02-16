const worldCities = [
	{
		"city": "Jalalabad",
		"lat": 34.44152692,
		"lng": 70.43610347,
		"pop": 401697,
		"iso2": "AF",
		"iso3": "AFG",
		"prov": "Nangarhar"
	},
	{
		"city": "Herat",
		"lat": 34.33000917,
		"lng": 62.16999304,
		"pop": 439232.5,
		"iso2": "AF",
		"iso3": "AFG",
		"prov": "Hirat"
	},
	{
		"city": "Mazar-e Sharif",
		"lat": 36.69999371,
		"lng": 67.10002803,
		"pop": 365432.5,
		"iso2": "AF",
		"iso3": "AFG",
		"prov": "Balkh"
	},
	{
		"city": "Kandahar",
		"lat": 31.61002016,
		"lng": 65.69494584,
		"pop": 613871,
		"iso2": "AF",
		"iso3": "AFG",
		"prov": "Kandahar"
	},
	{
		"city": "Kabul",
		"lat": 34.51669029,
		"lng": 69.18326005,
		"pop": 3160266,
		"iso2": "AF",
		"iso3": "AFG",
		"prov": "Kabul"
	},
	{
		"city": "Elbasan",
		"lat": 41.12150677,
		"lng": 20.08382808,
		"pop": 132956.5,
		"iso2": "AL",
		"iso3": "ALB",
		"prov": "Elbasan"
	},
	{
		"city": "Durres",
		"lat": 41.3177997,
		"lng": 19.44820797,
		"pop": 132233,
		"iso2": "AL",
		"iso3": "ALB",
		"prov": "Durrës"
	},
	{
		"city": "Shkoder",
		"lat": 42.06845156,
		"lng": 19.51884965,
		"pop": 122006,
		"iso2": "AL",
		"iso3": "ALB",
		"prov": "Shkodër"
	},
	{
		"city": "Tirana",
		"lat": 41.32754071,
		"lng": 19.81888301,
		"pop": 658318,
		"iso2": "AL",
		"iso3": "ALB",
		"prov": "Durrës"
	},
	{
		"city": "Jijel",
		"lat": 36.82199703,
		"lng": 5.76600356,
		"pop": 148000,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Jijel"
	},
	{
		"city": "Tizi-Ouzou",
		"lat": 36.80000111,
		"lng": 4.033332556,
		"pop": 144000,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Tizi Ouzou"
	},
	{
		"city": "Bordj Bou Arreridj",
		"lat": 36.05900401,
		"lng": 4.629996466,
		"pop": 134500,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Bordj Bou Arréridj"
	},
	{
		"city": "M'sila",
		"lat": 35.7000031,
		"lng": 4.545000584,
		"pop": 125000,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "M'Sila"
	},
	{
		"city": "Guelma",
		"lat": 36.46600213,
		"lng": 7.427997486,
		"pop": 123590,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Guelma"
	},
	{
		"city": "Oum el Bouaghi",
		"lat": 35.84999715,
		"lng": 7.149996522,
		"pop": 100821,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Oum el Bouaghi"
	},
	{
		"city": "Sidi bel Abbes",
		"lat": 35.19034426,
		"lng": -0.639971559,
		"pop": 200186.5,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Sidi Bel Abbès"
	},
	{
		"city": "Tlimcen",
		"lat": 34.89041424,
		"lng": -1.32000757,
		"pop": 181059,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Tlemcen"
	},
	{
		"city": "Skikda",
		"lat": 36.88042198,
		"lng": 6.899981647,
		"pop": 193941.5,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Skikda"
	},
	{
		"city": "Chlef",
		"lat": 36.17041363,
		"lng": 1.319960489,
		"pop": 449167,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Chlef"
	},
	{
		"city": "Mascara",
		"lat": 35.40040895,
		"lng": 0.14003251,
		"pop": 108230,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Mascara"
	},
	{
		"city": "Mostaganem",
		"lat": 35.940376,
		"lng": 0.089983885,
		"pop": 159177,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Mostaganem"
	},
	{
		"city": "Saida",
		"lat": 34.84039146,
		"lng": 0.14003251,
		"pop": 134855,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Saïda"
	},
	{
		"city": "Tiarat",
		"lat": 35.38043601,
		"lng": 1.319960489,
		"pop": 184195,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Tiaret"
	},
	{
		"city": "Bejaia",
		"lat": 36.76037762,
		"lng": 5.070015827,
		"pop": 274520,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Béjaïa"
	},
	{
		"city": "Blida",
		"lat": 36.4203467,
		"lng": 2.829997517,
		"pop": 388174,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Blida"
	},
	{
		"city": "Bouira",
		"lat": 36.38047833,
		"lng": 3.900009724,
		"pop": 110144,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Bouira"
	},
	{
		"city": "Medea",
		"lat": 36.27040753,
		"lng": 2.770001179,
		"pop": 145863.5,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Médéa"
	},
	{
		"city": "Souk Ahras",
		"lat": 36.29038047,
		"lng": 7.949995075,
		"pop": 134947,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Souk Ahras"
	},
	{
		"city": "Tebessa",
		"lat": 35.41043418,
		"lng": 8.120010537,
		"pop": 171742,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Tébessa"
	},
	{
		"city": "Arak",
		"lat": 25.2799931,
		"lng": 3.749993041,
		"pop": 423251,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Tamanghasset"
	},
	{
		"city": "Biskra",
		"lat": 34.85997683,
		"lng": 5.73002722,
		"pop": 202103,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Biskra"
	},
	{
		"city": "Djelfa",
		"lat": 34.67998781,
		"lng": 3.250023558,
		"pop": 170901,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Djelfa"
	},
	{
		"city": "Setif",
		"lat": 36.18002545,
		"lng": 5.399969847,
		"pop": 274744,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Sétif"
	},
	{
		"city": "Batna",
		"lat": 35.56995933,
		"lng": 6.170000365,
		"pop": 269467,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Batna"
	},
	{
		"city": "Annaba",
		"lat": 36.92000612,
		"lng": 7.759980834,
		"pop": 355047,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Annaba"
	},
	{
		"city": "Constantine",
		"lat": 36.35998863,
		"lng": 6.599948281,
		"pop": 527638,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Constantine"
	},
	{
		"city": "Oran",
		"lat": 35.71000246,
		"lng": -0.61997278,
		"pop": 721992,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Oran"
	},
	{
		"city": "Algiers",
		"lat": 36.7630648,
		"lng": 3.05055253,
		"pop": 2665831.5,
		"iso2": "DZ",
		"iso3": "DZA",
		"prov": "Alger"
	},
	{
		"city": "Huambo",
		"lat": -12.74998533,
		"lng": 15.76000932,
		"pop": 986000,
		"iso2": "AO",
		"iso3": "AGO",
		"prov": "Huambo"
	},
	{
		"city": "Luanda",
		"lat": -8.838286114,
		"lng": 13.23442704,
		"pop": 3562086,
		"iso2": "AO",
		"iso3": "AGO",
		"prov": "Luanda"
	},
	{
		"city": "Corrientes",
		"lat": -27.48996417,
		"lng": -58.80998682,
		"pop": 339945,
		"iso2": "AR",
		"iso3": "ARG",
		"prov": "Corrientes"
	},
	{
		"city": "La Plata",
		"lat": -34.90961465,
		"lng": -57.95996118,
		"pop": 440388.5,
		"iso2": "AR",
		"iso3": "ARG",
		"prov": "Ciudad de Buenos Aires"
	},
	{
		"city": "San Luis",
		"lat": -33.29999713,
		"lng": -66.35001754,
		"pop": 308146,
		"iso2": "AR",
		"iso3": "ARG",
		"prov": "San Luis"
	},
	{
		"city": "Santiago del Estero",
		"lat": -27.78333128,
		"lng": -64.26665633,
		"pop": 317549.5,
		"iso2": "AR",
		"iso3": "ARG",
		"prov": "Santiago del Estero"
	},
	{
		"city": "Resistencia",
		"lat": -27.45999184,
		"lng": -58.99002751,
		"pop": 368455.5,
		"iso2": "AR",
		"iso3": "ARG",
		"prov": "Chaco"
	},
	{
		"city": "San Juan",
		"lat": -31.55002643,
		"lng": -68.51998845,
		"pop": 433892,
		"iso2": "AR",
		"iso3": "ARG",
		"prov": "San Juan"
	},
	{
		"city": "Salta",
		"lat": -24.78335936,
		"lng": -65.41663782,
		"pop": 484646,
		"iso2": "AR",
		"iso3": "ARG",
		"prov": "Salta"
	},
	{
		"city": "San Miguel de Tucuman",
		"lat": -26.81600014,
		"lng": -65.21662419,
		"pop": 678803.5,
		"iso2": "AR",
		"iso3": "ARG",
		"prov": "Tucumán"
	},
	{
		"city": "Santa Fe",
		"lat": -31.62387205,
		"lng": -60.69000126,
		"pop": 393504,
		"iso2": "AR",
		"iso3": "ARG",
		"prov": "Santa Fe"
	},
	{
		"city": "Rosario",
		"lat": -32.95112954,
		"lng": -60.66630762,
		"pop": 1094784.5,
		"iso2": "AR",
		"iso3": "ARG",
		"prov": "Santa Fe"
	},
	{
		"city": "Mendoza",
		"lat": -32.88333006,
		"lng": -68.81661117,
		"pop": 827815,
		"iso2": "AR",
		"iso3": "ARG",
		"prov": "Mendoza"
	},
	{
		"city": "Mar del Plata",
		"lat": -38.00002033,
		"lng": -57.57998438,
		"pop": 554916,
		"iso2": "AR",
		"iso3": "ARG",
		"prov": "Ciudad de Buenos Aires"
	},
	{
		"city": "Cordoba",
		"lat": -31.39995807,
		"lng": -64.18229456,
		"pop": 1374467.5,
		"iso2": "AR",
		"iso3": "ARG",
		"prov": "Córdoba"
	},
	{
		"city": "Posadas",
		"lat": -27.3578321,
		"lng": -55.88510735,
		"pop": 334589.5,
		"iso2": "AR",
		"iso3": "ARG",
		"prov": "Misiones"
	},
	{
		"city": "Buenos Aires",
		"lat": -34.60250161,
		"lng": -58.39753137,
		"pop": 11862073,
		"iso2": "AR",
		"iso3": "ARG",
		"prov": "Ciudad de Buenos Aires"
	},
	{
		"city": "Yerevan",
		"lat": 40.18115074,
		"lng": 44.51355139,
		"pop": 1097742.5,
		"iso2": "AM",
		"iso3": "ARM",
		"prov": "Erevan"
	},
	{
		"city": "Gold Coast",
		"lat": -28.08150429,
		"lng": 153.4482458,
		"pop": 429954.5,
		"iso2": "AU",
		"iso3": "AUS",
		"prov": "Queensland"
	},
	{
		"city": "Newcastle",
		"lat": -32.84534788,
		"lng": 151.8150122,
		"pop": 816285.5,
		"iso2": "AU",
		"iso3": "AUS",
		"prov": "New South Wales"
	},
	{
		"city": "Adelaide",
		"lat": -34.93498777,
		"lng": 138.6000048,
		"pop": 990677,
		"iso2": "AU",
		"iso3": "AUS",
		"prov": "South Australia"
	},
	{
		"city": "Brisbane",
		"lat": -27.45503091,
		"lng": 153.0350927,
		"pop": 1393176.5,
		"iso2": "AU",
		"iso3": "AUS",
		"prov": "Queensland"
	},
	{
		"city": "Perth",
		"lat": -31.95501463,
		"lng": 115.8399987,
		"pop": 1206108,
		"iso2": "AU",
		"iso3": "AUS",
		"prov": "Western Australia"
	},
	{
		"city": "Melbourne",
		"lat": -37.82003131,
		"lng": 144.9750162,
		"pop": 2131812.5,
		"iso2": "AU",
		"iso3": "AUS",
		"prov": "Victoria"
	},
	{
		"city": "Sydney",
		"lat": -33.92001097,
		"lng": 151.1851798,
		"pop": 4135711,
		"iso2": "AU",
		"iso3": "AUS",
		"prov": "New South Wales"
	},
	{
		"city": "Graz",
		"lat": 47.0777582,
		"lng": 15.41000484,
		"pop": 242780,
		"iso2": "AT",
		"iso3": "AUT",
		"prov": "Steiermark"
	},
	{
		"city": "Linz",
		"lat": 48.31923281,
		"lng": 14.28878129,
		"pop": 265161.5,
		"iso2": "AT",
		"iso3": "AUT",
		"prov": "Oberösterreich"
	},
	{
		"city": "Salzburg",
		"lat": 47.81047833,
		"lng": 13.0400203,
		"pop": 178274,
		"iso2": "AT",
		"iso3": "AUT",
		"prov": "Salzburg"
	},
	{
		"city": "Innsbruck",
		"lat": 47.28040733,
		"lng": 11.4099906,
		"pop": 133840.5,
		"iso2": "AT",
		"iso3": "AUT",
		"prov": "Tirol"
	},
	{
		"city": "Vienna",
		"lat": 48.20001528,
		"lng": 16.36663896,
		"pop": 2065500,
		"iso2": "AT",
		"iso3": "AUT",
		"prov": "Wien"
	},
	{
		"city": "Ganca",
		"lat": 40.68499595,
		"lng": 46.35002844,
		"pop": 301699.5,
		"iso2": "AZ",
		"iso3": "AZE",
		"prov": "Ganca"
	},
	{
		"city": "Baku",
		"lat": 40.39527203,
		"lng": 49.86221716,
		"pop": 2007150,
		"iso2": "AZ",
		"iso3": "AZE",
		"prov": "Baki"
	},
	{
		"city": "Manama",
		"lat": 26.23613629,
		"lng": 50.58305172,
		"pop": 360697,
		"iso2": "BH",
		"iso3": "BHR",
		"prov": ""
	},
	{
		"city": "Mymensingh",
		"lat": 24.75041302,
		"lng": 90.3800024,
		"pop": 330126,
		"iso2": "BD",
		"iso3": "BGD",
		"prov": "Dhaka"
	},
	{
		"city": "Comilla",
		"lat": 23.47041363,
		"lng": 91.16998002,
		"pop": 389411,
		"iso2": "BD",
		"iso3": "BGD",
		"prov": "Chittagong"
	},
	{
		"city": "Khulna",
		"lat": 22.839987,
		"lng": 89.56000077,
		"pop": 1447669.5,
		"iso2": "BD",
		"iso3": "BGD",
		"prov": "Khulna"
	},
	{
		"city": "Rajshahi",
		"lat": 24.37498374,
		"lng": 88.6050203,
		"pop": 755066.5,
		"iso2": "BD",
		"iso3": "BGD",
		"prov": "Rajshahi"
	},
	{
		"city": "Dhaka",
		"lat": 23.72305971,
		"lng": 90.40857947,
		"pop": 9899167,
		"iso2": "BD",
		"iso3": "BGD",
		"prov": "Dhaka"
	},
	{
		"city": "Chittagong",
		"lat": 22.32999229,
		"lng": 91.79996741,
		"pop": 4224611,
		"iso2": "BD",
		"iso3": "BGD",
		"prov": "Chittagong"
	},
	{
		"city": "Baranavichy",
		"lat": 53.13684572,
		"lng": 26.01344031,
		"pop": 156514.5,
		"iso2": "BY",
		"iso3": "BLR",
		"prov": "Brest"
	},
	{
		"city": "Pinsk",
		"lat": 52.12786338,
		"lng": 26.09405554,
		"pop": 120838.5,
		"iso2": "BY",
		"iso3": "BLR",
		"prov": "Brest"
	},
	{
		"city": "Mahilyow",
		"lat": 53.89850466,
		"lng": 30.32465002,
		"pop": 343527,
		"iso2": "BY",
		"iso3": "BLR",
		"prov": "Mahilyow"
	},
	{
		"city": "Hrodna",
		"lat": 53.67787213,
		"lng": 23.83409013,
		"pop": 285867,
		"iso2": "BY",
		"iso3": "BLR",
		"prov": "Hrodna"
	},
	{
		"city": "Barysaw",
		"lat": 54.22600405,
		"lng": 28.49215206,
		"pop": 127694.5,
		"iso2": "BY",
		"iso3": "BLR",
		"prov": "Minsk"
	},
	{
		"city": "Homyel",
		"lat": 52.43001548,
		"lng": 31.00000932,
		"pop": 472337.5,
		"iso2": "BY",
		"iso3": "BLR",
		"prov": "Homyel'"
	},
	{
		"city": "Vitsyebsk",
		"lat": 55.18871014,
		"lng": 30.18533036,
		"pop": 333318.5,
		"iso2": "BY",
		"iso3": "BLR",
		"prov": "Vitsyebsk"
	},
	{
		"city": "Brest",
		"lat": 52.09998395,
		"lng": 23.69998979,
		"pop": 266775,
		"iso2": "BY",
		"iso3": "BLR",
		"prov": "Brest"
	},
	{
		"city": "Minsk",
		"lat": 53.89997744,
		"lng": 27.56662716,
		"pop": 1691069,
		"iso2": "BY",
		"iso3": "BLR",
		"prov": "Minsk"
	},
	{
		"city": "Gent",
		"lat": 51.02999758,
		"lng": 3.700021931,
		"pop": 337914.5,
		"iso2": "BE",
		"iso3": "BEL",
		"prov": "East Flanders"
	},
	{
		"city": "Liege",
		"lat": 50.62999615,
		"lng": 5.580010537,
		"pop": 472803,
		"iso2": "BE",
		"iso3": "BEL",
		"prov": "Liege"
	},
	{
		"city": "Brugge",
		"lat": 51.22037355,
		"lng": 3.230024779,
		"pop": 131589,
		"iso2": "BE",
		"iso3": "BEL",
		"prov": "Brugge"
	},
	{
		"city": "Charleroi",
		"lat": 50.42039654,
		"lng": 4.450001992,
		"pop": 272749.5,
		"iso2": "BE",
		"iso3": "BEL",
		"prov": "Charleroi"
	},
	{
		"city": "Antwerpen",
		"lat": 51.22037355,
		"lng": 4.415017048,
		"pop": 689902.5,
		"iso2": "BE",
		"iso3": "BEL",
		"prov": "Antwerp"
	},
	{
		"city": "Brussels",
		"lat": 50.83331708,
		"lng": 4.333316608,
		"pop": 1381011,
		"iso2": "BE",
		"iso3": "BEL",
		"prov": "Brussels"
	},
	{
		"city": "Cotonou",
		"lat": 6.400008564,
		"lng": 2.519990599,
		"pop": 726292,
		"iso2": "BJ",
		"iso3": "BEN",
		"prov": "Ouémé"
	},
	{
		"city": "Cochabamba",
		"lat": -17.41001097,
		"lng": -66.16997685,
		"pop": 804138,
		"iso2": "BO",
		"iso3": "BOL",
		"prov": "Cochabamba"
	},
	{
		"city": "La Paz",
		"lat": -16.49797361,
		"lng": -68.14998519,
		"pop": 1201399.5,
		"iso2": "BO",
		"iso3": "BOL",
		"prov": "La Paz"
	},
	{
		"city": "Santa Cruz",
		"lat": -17.75391762,
		"lng": -63.22599634,
		"pop": 1859530.5,
		"iso2": "BO",
		"iso3": "BOL",
		"prov": "Santa Cruz"
	},
	{
		"city": "Zenica",
		"lat": 44.21997398,
		"lng": 17.91998083,
		"pop": 151388,
		"iso2": "BA",
		"iso3": "BIH",
		"prov": "Zenica-Doboj"
	},
	{
		"city": "Mostar",
		"lat": 43.35049217,
		"lng": 17.82003861,
		"pop": 133792.5,
		"iso2": "BA",
		"iso3": "BIH",
		"prov": "Herzegovina-Neretva"
	},
	{
		"city": "Tuzla",
		"lat": 44.5504706,
		"lng": 18.6800378,
		"pop": 143410,
		"iso2": "BA",
		"iso3": "BIH",
		"prov": "Tuzla"
	},
	{
		"city": "Banja Luka",
		"lat": 44.78040489,
		"lng": 17.17997432,
		"pop": 221422,
		"iso2": "BA",
		"iso3": "BIH",
		"prov": "Serbian Republic"
	},
	{
		"city": "Sarajevo",
		"lat": 43.8500224,
		"lng": 18.38300167,
		"pop": 662816.5,
		"iso2": "BA",
		"iso3": "BIH",
		"prov": "Sarajevo"
	},
	{
		"city": "Canoas",
		"lat": -29.91999673,
		"lng": -51.17998743,
		"pop": 466661,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Rio Grande do Sul"
	},
	{
		"city": "Sao Jose dos Pinhais",
		"lat": -25.57002968,
		"lng": -49.18000615,
		"pop": 472180,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Paraná"
	},
	{
		"city": "Nova Iguacu",
		"lat": -22.74002155,
		"lng": -43.46996708,
		"pop": 844583,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Rio de Janeiro"
	},
	{
		"city": "Duque de Caxias",
		"lat": -22.76999388,
		"lng": -43.30997685,
		"pop": 842890,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Rio de Janeiro"
	},
	{
		"city": "Niteroi",
		"lat": -22.90001178,
		"lng": -43.09998967,
		"pop": 993920,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Rio de Janeiro"
	},
	{
		"city": "Santo Andre",
		"lat": -23.65283405,
		"lng": -46.52781661,
		"pop": 662373,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "São Paulo"
	},
	{
		"city": "Jundiai",
		"lat": -23.19999347,
		"lng": -46.8799915,
		"pop": 413568.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "São Paulo"
	},
	{
		"city": "Sao Jose dos Campos",
		"lat": -23.19999347,
		"lng": -45.87994918,
		"pop": 695322.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "São Paulo"
	},
	{
		"city": "Americana",
		"lat": -22.74994342,
		"lng": -47.32998987,
		"pop": 337747,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "São Paulo"
	},
	{
		"city": "Piracicaba",
		"lat": -22.70999754,
		"lng": -47.63999679,
		"pop": 329530,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "São Paulo"
	},
	{
		"city": "Jaboatao",
		"lat": -8.110010153,
		"lng": -35.02004358,
		"pop": 681214,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Pernambuco"
	},
	{
		"city": "Olinda",
		"lat": -7.999991029,
		"lng": -34.8499506,
		"pop": 659554,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Pernambuco"
	},
	{
		"city": "Ipatinga",
		"lat": -19.4796004,
		"lng": -42.51999923,
		"pop": 318320,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Minas Gerais"
	},
	{
		"city": "Novo Hamburgo",
		"lat": -29.70962197,
		"lng": -51.13998987,
		"pop": 557017,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Rio Grande do Sul"
	},
	{
		"city": "Maringa",
		"lat": -23.4095414,
		"lng": -51.92996749,
		"pop": 320029.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Paraná"
	},
	{
		"city": "Foz do Iguacu",
		"lat": -25.52346922,
		"lng": -54.52998967,
		"pop": 366989,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Paraná"
	},
	{
		"city": "Volta Redonda",
		"lat": -22.51956989,
		"lng": -44.09496769,
		"pop": 352971,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Rio de Janeiro"
	},
	{
		"city": "Sao Jose do Rio Preto",
		"lat": -20.79962319,
		"lng": -49.38996749,
		"pop": 358243.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "São Paulo"
	},
	{
		"city": "Taubate",
		"lat": -23.01953937,
		"lng": -45.55999455,
		"pop": 327600.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "São Paulo"
	},
	{
		"city": "Juiz de Fora",
		"lat": -21.77000324,
		"lng": -43.3749858,
		"pop": 464764.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Minas Gerais"
	},
	{
		"city": "Joinville",
		"lat": -26.31995807,
		"lng": -48.83994938,
		"pop": 710737.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Santa Catarina"
	},
	{
		"city": "Vitoria",
		"lat": -20.32399331,
		"lng": -40.36599634,
		"pop": 1008328,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Espírito Santo"
	},
	{
		"city": "Joao Pessoa",
		"lat": -7.10113513,
		"lng": -34.87607117,
		"pop": 803441.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Paraíba"
	},
	{
		"city": "Campina Grande",
		"lat": -7.230012188,
		"lng": -35.88001693,
		"pop": 383098.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Paraíba"
	},
	{
		"city": "Natal",
		"lat": -6.983825664,
		"lng": -60.26994938,
		"pop": 980588,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Amazonas"
	},
	{
		"city": "Londrina",
		"lat": -23.30003904,
		"lng": -51.17998743,
		"pop": 496035,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Paraná"
	},
	{
		"city": "Campos",
		"lat": -21.74995278,
		"lng": -41.32002079,
		"pop": 378943,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Rio de Janeiro"
	},
	{
		"city": "Aracaju",
		"lat": -10.90002073,
		"lng": -37.11996708,
		"pop": 587765.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Sergipe"
	},
	{
		"city": "Vila Velha",
		"lat": 3.21666282,
		"lng": -51.21665186,
		"pop": 742413.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Amapá"
	},
	{
		"city": "Santos",
		"lat": -23.95372393,
		"lng": -46.33294266,
		"pop": 1060201.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "São Paulo"
	},
	{
		"city": "Bauru",
		"lat": -22.33002073,
		"lng": -49.08001225,
		"pop": 307929.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "São Paulo"
	},
	{
		"city": "Sao Luis",
		"lat": -2.515984681,
		"lng": -44.26599085,
		"pop": 524692.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Maranhão"
	},
	{
		"city": "Belo Horizonte",
		"lat": -19.91502602,
		"lng": -43.91500452,
		"pop": 3974112,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Minas Gerais"
	},
	{
		"city": "Montes Claros",
		"lat": -16.72002724,
		"lng": -43.86002079,
		"pop": 300022,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Minas Gerais"
	},
	{
		"city": "Uberlandia",
		"lat": -18.89999754,
		"lng": -48.27998356,
		"pop": 484862,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Minas Gerais"
	},
	{
		"city": "Cuiaba",
		"lat": -15.56960651,
		"lng": -56.08498519,
		"pop": 603143.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Mato Grosso"
	},
	{
		"city": "Caxias do Sul",
		"lat": -29.17999022,
		"lng": -51.17003972,
		"pop": 377580.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Rio Grande do Sul"
	},
	{
		"city": "Teresina",
		"lat": -5.095000388,
		"lng": -42.7800092,
		"pop": 746860.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Piauí"
	},
	{
		"city": "Maceio",
		"lat": -9.619995505,
		"lng": -35.72997441,
		"pop": 1000215.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Alagoas"
	},
	{
		"city": "Vila Velha",
		"lat": -20.36760822,
		"lng": -40.31798893,
		"pop": 742413.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Espírito Santo"
	},
	{
		"city": "Natal",
		"lat": -5.780023174,
		"lng": -35.24000431,
		"pop": 925521.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Rio Grande do Norte"
	},
	{
		"city": "Campinas",
		"lat": -22.90001178,
		"lng": -47.10002975,
		"pop": 1911277,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "São Paulo"
	},
	{
		"city": "Sorocaba",
		"lat": -23.49000161,
		"lng": -47.46998132,
		"pop": 561071.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "São Paulo"
	},
	{
		"city": "Ribeirao Preto",
		"lat": -21.17003986,
		"lng": -47.82998519,
		"pop": 520774,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "São Paulo"
	},
	{
		"city": "Manaus",
		"lat": -3.100031719,
		"lng": -60.00001754,
		"pop": 1636622,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Amazonas"
	},
	{
		"city": "Campo Grande",
		"lat": -20.45003213,
		"lng": -54.61662521,
		"pop": 687723,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Mato Grosso do Sul"
	},
	{
		"city": "Florianopolis",
		"lat": -27.57998452,
		"lng": -48.52002059,
		"pop": 568783,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Santa Catarina"
	},
	{
		"city": "Feira de Santana",
		"lat": -12.25001585,
		"lng": -38.9700092,
		"pop": 449194.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Bahia"
	},
	{
		"city": "Macapa",
		"lat": 0.033007018,
		"lng": -51.0500212,
		"pop": 433781.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Amapá"
	},
	{
		"city": "Belem",
		"lat": -1.450003236,
		"lng": -48.48002303,
		"pop": 1787368.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Pará"
	},
	{
		"city": "Brasilia",
		"lat": -15.78334023,
		"lng": -47.91605229,
		"pop": 3139979.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Distrito Federal"
	},
	{
		"city": "Porto Alegre",
		"lat": -30.05001463,
		"lng": -51.20001205,
		"pop": 2644870.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Rio Grande do Sul"
	},
	{
		"city": "Curitiba",
		"lat": -25.420013,
		"lng": -49.3199976,
		"pop": 2291430,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Paraná"
	},
	{
		"city": "Fortaleza",
		"lat": -3.750017884,
		"lng": -38.57998132,
		"pop": 2958717.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Ceará"
	},
	{
		"city": "Salvador",
		"lat": -12.9699719,
		"lng": -38.47998743,
		"pop": 3081422.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Bahia"
	},
	{
		"city": "Goiania",
		"lat": -16.72002724,
		"lng": -49.30002466,
		"pop": 1596597.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Goiás"
	},
	{
		"city": "Recife",
		"lat": -8.075645326,
		"lng": -34.91560551,
		"pop": 2564549,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Pernambuco"
	},
	{
		"city": "Rio de Janeiro",
		"lat": -22.92502317,
		"lng": -43.22502079,
		"pop": 6879087.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "Rio de Janeiro"
	},
	{
		"city": "Sao Paulo",
		"lat": -23.55867959,
		"lng": -46.62501998,
		"pop": 14433147.5,
		"iso2": "BR",
		"iso3": "BRA",
		"prov": "São Paulo"
	},
	{
		"city": "Plovdiv",
		"lat": 42.15397605,
		"lng": 24.7539823,
		"pop": 319089.5,
		"iso2": "BG",
		"iso3": "BGR",
		"prov": "Plovdiv"
	},
	{
		"city": "Stara Zagora",
		"lat": 42.42313275,
		"lng": 25.6227148,
		"pop": 128315.5,
		"iso2": "BG",
		"iso3": "BGR",
		"prov": "Stara Zagora"
	},
	{
		"city": "Pleven",
		"lat": 43.42376935,
		"lng": 24.61337073,
		"pop": 110445.5,
		"iso2": "BG",
		"iso3": "BGR",
		"prov": "Pleven"
	},
	{
		"city": "Varna",
		"lat": 43.21564252,
		"lng": 27.89528926,
		"pop": 245522,
		"iso2": "BG",
		"iso3": "BGR",
		"prov": "Varna"
	},
	{
		"city": "Ruse",
		"lat": 43.85369143,
		"lng": 25.97333939,
		"pop": 170254,
		"iso2": "BG",
		"iso3": "BGR",
		"prov": "Ruse"
	},
	{
		"city": "Burgas",
		"lat": 42.51460004,
		"lng": 27.47464311,
		"pop": 174254,
		"iso2": "BG",
		"iso3": "BGR",
		"prov": "Burgas"
	},
	{
		"city": "Sofia",
		"lat": 42.68334943,
		"lng": 23.31665401,
		"pop": 1029913.5,
		"iso2": "BG",
		"iso3": "BGR",
		"prov": "Grad Sofiya"
	},
	{
		"city": "Bobo Dioulasso",
		"lat": 11.1799752,
		"lng": -4.289981325,
		"pop": 346035,
		"iso2": "BF",
		"iso3": "BFA",
		"prov": "Houet"
	},
	{
		"city": "Ouagadougou",
		"lat": 12.37031598,
		"lng": -1.524723756,
		"pop": 992228.5,
		"iso2": "BF",
		"iso3": "BFA",
		"prov": "Kadiogo"
	},
	{
		"city": "Bujumbura",
		"lat": -3.37608722,
		"lng": 29.36000606,
		"pop": 331700,
		"iso2": "BI",
		"iso3": "BDI",
		"prov": "Bujumbura Mairie"
	},
	{
		"city": "Phnom Penh",
		"lat": 11.55003013,
		"lng": 104.9166345,
		"pop": 1466000,
		"iso2": "KH",
		"iso3": "KHM",
		"prov": "Phnom Penh"
	},
	{
		"city": "Douala",
		"lat": 4.060409769,
		"lng": 9.709991006,
		"pop": 1622041,
		"iso2": "CM",
		"iso3": "CMR",
		"prov": "Littoral"
	},
	{
		"city": "Bamenda",
		"lat": 5.959983743,
		"lng": 10.15001583,
		"pop": 419567,
		"iso2": "CM",
		"iso3": "CMR",
		"prov": "Nord-Ouest"
	},
	{
		"city": "Garoua",
		"lat": 9.30001243,
		"lng": 13.39002478,
		"pop": 365436.5,
		"iso2": "CM",
		"iso3": "CMR",
		"prov": "Nord"
	},
	{
		"city": "Yaounde",
		"lat": 3.866700662,
		"lng": 11.51665076,
		"pop": 1335793.5,
		"iso2": "CM",
		"iso3": "CMR",
		"prov": "Centre"
	},
	{
		"city": "Selkirk",
		"lat": 50.15002545,
		"lng": -96.88332178,
		"pop": 9819.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Manitoba"
	},
	{
		"city": "Gimli",
		"lat": 50.63330345,
		"lng": -96.99998133,
		"pop": 2316,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Manitoba"
	},
	{
		"city": "Melville",
		"lat": 50.93331097,
		"lng": -102.7999891,
		"pop": 4226,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Saskatchewan"
	},
	{
		"city": "Weyburn",
		"lat": 49.66656659,
		"lng": -103.8500025,
		"pop": 9302.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Saskatchewan"
	},
	{
		"city": "La Ronge",
		"lat": 55.10000755,
		"lng": -105.3000173,
		"pop": 3427,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Saskatchewan"
	},
	{
		"city": "Camrose",
		"lat": 53.01669802,
		"lng": -112.8166386,
		"pop": 15747,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Alberta"
	},
	{
		"city": "Hinton",
		"lat": 53.39998212,
		"lng": -117.5833503,
		"pop": 10077,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Alberta"
	},
	{
		"city": "Vegreville",
		"lat": 53.49997601,
		"lng": -112.0499671,
		"pop": 5745.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Alberta"
	},
	{
		"city": "Stettler",
		"lat": 52.33296714,
		"lng": -112.6832876,
		"pop": 5449.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Alberta"
	},
	{
		"city": "Lac La Biche",
		"lat": 54.77193972,
		"lng": -111.964701,
		"pop": 2952.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Alberta"
	},
	{
		"city": "Wetaskiwin",
		"lat": 52.96657188,
		"lng": -113.3832966,
		"pop": 11562.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Alberta"
	},
	{
		"city": "Creston",
		"lat": 49.09996035,
		"lng": -116.516697,
		"pop": 4816,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Cranbrook",
		"lat": 49.5166791,
		"lng": -115.7666653,
		"pop": 17990,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Terrace",
		"lat": 54.49999249,
		"lng": -128.5833248,
		"pop": 14772,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Chilliwack",
		"lat": 49.16664878,
		"lng": -121.949983,
		"pop": 51942,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Hay River",
		"lat": 60.84999249,
		"lng": -115.7000027,
		"pop": 3774,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Northwest Territories"
	},
	{
		"city": "Owen Sound",
		"lat": 44.56664532,
		"lng": -80.84998519,
		"pop": 22625,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Orillia",
		"lat": 44.59997662,
		"lng": -79.41666183,
		"pop": 33830.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Kapuskasing",
		"lat": 49.4166852,
		"lng": -82.43332524,
		"pop": 8732,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Thessalon",
		"lat": 46.24997927,
		"lng": -83.55000126,
		"pop": 1416.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Geraldton",
		"lat": 49.71664105,
		"lng": -86.96664026,
		"pop": 1290,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Belleville",
		"lat": 44.16666974,
		"lng": -77.38334924,
		"pop": 43990,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Sarnia",
		"lat": 42.96663963,
		"lng": -82.3999681,
		"pop": 113585,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Peterborough",
		"lat": 44.29996909,
		"lng": -78.33326542,
		"pop": 79752,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Oshawa",
		"lat": 43.87999473,
		"lng": -78.84997807,
		"pop": 349476,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "London",
		"lat": 42.9699986,
		"lng": -81.24998661,
		"pop": 340900,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Kitchener",
		"lat": 43.44999514,
		"lng": -80.50000655,
		"pop": 413056.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "New Liskeard",
		"lat": 47.50000633,
		"lng": -79.66664657,
		"pop": 5203,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Brockville",
		"lat": 44.5892796,
		"lng": -75.69531275,
		"pop": 25172,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Riviere-du-Loup",
		"lat": 47.83329348,
		"lng": -69.53331161,
		"pop": 16403,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Drummondville",
		"lat": 45.88333498,
		"lng": -72.4833641,
		"pop": 56806,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Sherbrooke",
		"lat": 45.40000531,
		"lng": -71.89998885,
		"pop": 134549.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Cap-Chat",
		"lat": 49.09996035,
		"lng": -66.68330469,
		"pop": 1475,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Baie-Comeau",
		"lat": 49.22266604,
		"lng": -68.15799504,
		"pop": 8808,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Amos",
		"lat": 48.56663373,
		"lng": -78.11666366,
		"pop": 10475.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Joliette",
		"lat": 46.03332583,
		"lng": -73.43330611,
		"pop": 40066.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "St.-Jerome",
		"lat": 45.7666496,
		"lng": -73.99998987,
		"pop": 66693.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "St-Augustin",
		"lat": 51.2423102,
		"lng": -58.64699935,
		"pop": 3961,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Rouyn-Noranda",
		"lat": 48.25001223,
		"lng": -79.03324854,
		"pop": 24312.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "La Sarre",
		"lat": 48.8000045,
		"lng": -79.20003422,
		"pop": 6366.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "New Glasgow",
		"lat": 45.58327578,
		"lng": -62.63331934,
		"pop": 19883.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Nova Scotia"
	},
	{
		"city": "Liverpool",
		"lat": 44.03995913,
		"lng": -64.72001367,
		"pop": 4331,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Nova Scotia"
	},
	{
		"city": "Amherst",
		"lat": 45.81656903,
		"lng": -64.21658187,
		"pop": 8631.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Nova Scotia"
	},
	{
		"city": "Deer Lake",
		"lat": 49.17440025,
		"lng": -57.42691878,
		"pop": 3953,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Newfoundland and Labrador"
	},
	{
		"city": "Happy Valley - Goose Bay",
		"lat": 53.29998822,
		"lng": -60.29999923,
		"pop": 4309.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Newfoundland and Labrador"
	},
	{
		"city": "Tofino",
		"lat": 49.15207146,
		"lng": -125.9031487,
		"pop": 1655,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Steinbach",
		"lat": 49.51709251,
		"lng": -96.68330815,
		"pop": 9668,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Manitoba"
	},
	{
		"city": "Nelson House",
		"lat": 55.80045575,
		"lng": -98.85002344,
		"pop": 2500,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Manitoba"
	},
	{
		"city": "Yorkton",
		"lat": 51.21706626,
		"lng": -102.4665469,
		"pop": 14377.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Saskatchewan"
	},
	{
		"city": "Swift Current",
		"lat": 50.28373822,
		"lng": -107.766611,
		"pop": 14804.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Saskatchewan"
	},
	{
		"city": "Biggar",
		"lat": 52.05040041,
		"lng": -107.9832902,
		"pop": 2130,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Saskatchewan"
	},
	{
		"city": "Kindersley",
		"lat": 51.46697349,
		"lng": -109.1332976,
		"pop": 4316,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Saskatchewan"
	},
	{
		"city": "Meadow Lake",
		"lat": 54.13011843,
		"lng": -108.4347356,
		"pop": 5081.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Saskatchewan"
	},
	{
		"city": "Hudson Bay",
		"lat": 52.8504291,
		"lng": -102.3832961,
		"pop": 1909,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Saskatchewan"
	},
	{
		"city": "Lethbridge",
		"lat": 49.70049217,
		"lng": -112.8332784,
		"pop": 64594,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Alberta"
	},
	{
		"city": "Brooks",
		"lat": 50.56705426,
		"lng": -111.9000021,
		"pop": 13453.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Alberta"
	},
	{
		"city": "Lake Louise",
		"lat": 51.43369387,
		"lng": -116.1832807,
		"pop": 1248,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Alberta"
	},
	{
		"city": "Athabasca",
		"lat": 54.71703351,
		"lng": -113.2665853,
		"pop": 2399.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Alberta"
	},
	{
		"city": "Fort Chipewyan",
		"lat": 58.71709943,
		"lng": -111.1499962,
		"pop": 3222,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Alberta"
	},
	{
		"city": "Bella Bella",
		"lat": 52.14840476,
		"lng": -128.1172809,
		"pop": 1400,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Campbell River",
		"lat": 50.01708783,
		"lng": -125.2499882,
		"pop": 29941.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Port Hardy",
		"lat": 50.71707094,
		"lng": -127.4999801,
		"pop": 2295,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Nanaimo",
		"lat": 49.14602021,
		"lng": -123.9342911,
		"pop": 82698,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Quesnel",
		"lat": 52.98367678,
		"lng": -122.4832837,
		"pop": 13788,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Abbotsford",
		"lat": 49.05037681,
		"lng": -122.2999874,
		"pop": 151683,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Dawson Creek",
		"lat": 55.76696942,
		"lng": -120.233266,
		"pop": 10676.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Penticton",
		"lat": 49.50037518,
		"lng": -119.5832799,
		"pop": 34035,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Nelson",
		"lat": 49.48365786,
		"lng": -117.2832911,
		"pop": 10796,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Lillooet",
		"lat": 50.68371381,
		"lng": -121.9332656,
		"pop": 2893,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Powell River",
		"lat": 49.88371096,
		"lng": -124.5499793,
		"pop": 7999.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Revelstoke",
		"lat": 51.0004645,
		"lng": -118.1833395,
		"pop": 7600.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Burns Lake",
		"lat": 54.21701235,
		"lng": -125.7665975,
		"pop": 2633,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Baker Lake",
		"lat": 64.31699017,
		"lng": -96.01665633,
		"pop": 1584,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Nunavut"
	},
	{
		"city": "Fort McPherson",
		"lat": 67.49152508,
		"lng": -134.8949809,
		"pop": 1069,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Northwest Territories"
	},
	{
		"city": "Orangeville",
		"lat": 43.91707257,
		"lng": -80.08333948,
		"pop": 30812,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Little Current",
		"lat": 45.96702496,
		"lng": -81.93332992,
		"pop": 1595,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Chapleau",
		"lat": 47.83370689,
		"lng": -83.40001042,
		"pop": 2663,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Wawa",
		"lat": 48.00041506,
		"lng": -84.78333683,
		"pop": 2174,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Hearst",
		"lat": 49.70049217,
		"lng": -83.66658329,
		"pop": 4894.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Marathon",
		"lat": 48.75039512,
		"lng": -86.36665104,
		"pop": 4627,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Sioux Lookout",
		"lat": 50.26296429,
		"lng": -91.9166482,
		"pop": 4570,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Red Lake",
		"lat": 51.03369244,
		"lng": -93.83330123,
		"pop": 1765,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Deer Lake",
		"lat": 52.61703249,
		"lng": -94.06659448,
		"pop": 3743,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Cornwall",
		"lat": 45.01705711,
		"lng": -74.73333012,
		"pop": 47601.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Kingston",
		"lat": 44.23371991,
		"lng": -76.48330082,
		"pop": 108297.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Barrie",
		"lat": 44.38376243,
		"lng": -79.7000037,
		"pop": 150886.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Parry Sound",
		"lat": 45.33370445,
		"lng": -80.03300663,
		"pop": 6787,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Wiarton",
		"lat": 44.73368939,
		"lng": -81.13330123,
		"pop": 2182,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Cobalt",
		"lat": 47.38370852,
		"lng": -79.68331222,
		"pop": 1372,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Cochrane",
		"lat": 49.06701662,
		"lng": -81.01656417,
		"pop": 4441,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Nipigon",
		"lat": 49.01704551,
		"lng": -88.24997278,
		"pop": 1204,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Atikokan",
		"lat": 48.75039512,
		"lng": -91.61658899,
		"pop": 3625,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Rimouski",
		"lat": 48.43374778,
		"lng": -68.51668115,
		"pop": 35584,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Saint-Georges",
		"lat": 46.117145,
		"lng": -70.66665328,
		"pop": 26149,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Victoriaville",
		"lat": 46.05040489,
		"lng": -71.96667729,
		"pop": 37963,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Mistassini",
		"lat": 50.41706341,
		"lng": -73.86658716,
		"pop": 2645,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Shawinigan",
		"lat": 46.55037437,
		"lng": -72.733323,
		"pop": 41751.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Matagami",
		"lat": 49.75038576,
		"lng": -77.63328231,
		"pop": 1574.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Mont-Laurier",
		"lat": 46.55037437,
		"lng": -75.50002751,
		"pop": 11642,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Pembroke",
		"lat": 45.85026206,
		"lng": -77.11664718,
		"pop": 15551,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Saint John",
		"lat": 45.26704185,
		"lng": -66.07667505,
		"pop": 71153,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "New Brunswick"
	},
	{
		"city": "Edmundston",
		"lat": 47.37941937,
		"lng": -68.3332815,
		"pop": 17894,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "New Brunswick"
	},
	{
		"city": "Shelburne",
		"lat": 43.76560895,
		"lng": -65.31935694,
		"pop": 2553,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Nova Scotia"
	},
	{
		"city": "Antigonish",
		"lat": 45.62691652,
		"lng": -61.99819015,
		"pop": 5871,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Nova Scotia"
	},
	{
		"city": "Windsor",
		"lat": 44.98059938,
		"lng": -64.12911951,
		"pop": 3759,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Nova Scotia"
	},
	{
		"city": "Digby",
		"lat": 44.62258506,
		"lng": -65.7604928,
		"pop": 3000.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Nova Scotia"
	},
	{
		"city": "Stephenville",
		"lat": 48.55040733,
		"lng": -58.56656498,
		"pop": 6666,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Newfoundland and Labrador"
	},
	{
		"city": "Argentia",
		"lat": 47.30043194,
		"lng": -53.98999679,
		"pop": 1063,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Newfoundland and Labrador"
	},
	{
		"city": "Channel-Port aux Basques",
		"lat": 47.56700482,
		"lng": -59.15004358,
		"pop": 3232,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Newfoundland and Labrador"
	},
	{
		"city": "Gillam",
		"lat": 56.34998293,
		"lng": -94.69996668,
		"pop": 1281,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Manitoba"
	},
	{
		"city": "North Battleford",
		"lat": 52.76663576,
		"lng": -108.2833494,
		"pop": 15721.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Saskatchewan"
	},
	{
		"city": "Prince Albert",
		"lat": 53.20002016,
		"lng": -105.7499899,
		"pop": 29643.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Saskatchewan"
	},
	{
		"city": "Courtenay",
		"lat": 49.68333559,
		"lng": -124.9999777,
		"pop": 28946,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Kelowna",
		"lat": 49.89998903,
		"lng": -119.4833118,
		"pop": 110207.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Pangnirtung",
		"lat": 66.13331341,
		"lng": -65.75002832,
		"pop": 1320,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Nunavut"
	},
	{
		"city": "Dryden",
		"lat": 49.78332949,
		"lng": -92.83333643,
		"pop": 7862,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Attawapiskat",
		"lat": 52.91662661,
		"lng": -82.43332524,
		"pop": 1802,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Hamilton",
		"lat": 43.24998151,
		"lng": -79.82999577,
		"pop": 620501,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Windsor",
		"lat": 42.33329327,
		"lng": -83.03334029,
		"pop": 265068.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Trois Rivieres",
		"lat": 46.34997316,
		"lng": -72.54994918,
		"pop": 118051,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Sept-Iles",
		"lat": 50.31608767,
		"lng": -66.36001693,
		"pop": 25686,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Corner Brook",
		"lat": 48.94999534,
		"lng": -57.93334782,
		"pop": 19742,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Newfoundland and Labrador"
	},
	{
		"city": "Norway House",
		"lat": 53.96658836,
		"lng": -97.83328963,
		"pop": 5500,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Manitoba"
	},
	{
		"city": "Flin Flon",
		"lat": 54.76659121,
		"lng": -101.8833008,
		"pop": 6197.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Manitoba"
	},
	{
		"city": "Dauphin",
		"lat": 51.15001609,
		"lng": -100.0499502,
		"pop": 8747.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Manitoba"
	},
	{
		"city": "The Pas",
		"lat": 53.81662335,
		"lng": -101.2333147,
		"pop": 4928.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Manitoba"
	},
	{
		"city": "Moose Jaw",
		"lat": 50.39998435,
		"lng": -105.5500021,
		"pop": 31436.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Saskatchewan"
	},
	{
		"city": "Jasper",
		"lat": 52.88332115,
		"lng": -118.0833714,
		"pop": 3504.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Alberta"
	},
	{
		"city": "Medicine Hat",
		"lat": 50.03331423,
		"lng": -110.6833322,
		"pop": 58382,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Alberta"
	},
	{
		"city": "Red Deer",
		"lat": 52.26664044,
		"lng": -113.8000411,
		"pop": 74225,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Alberta"
	},
	{
		"city": "Banff",
		"lat": 51.17799888,
		"lng": -115.5719227,
		"pop": 6897,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Alberta"
	},
	{
		"city": "Grand Prairie",
		"lat": 55.16664431,
		"lng": -118.7999943,
		"pop": 41153.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Alberta"
	},
	{
		"city": "Smithers",
		"lat": 54.76659121,
		"lng": -127.1665896,
		"pop": 5841.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Kamloops",
		"lat": 50.66666058,
		"lng": -120.3332858,
		"pop": 68671,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Williams Lake",
		"lat": 52.1166496,
		"lng": -122.1499966,
		"pop": 12361,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Prince George",
		"lat": 53.91666892,
		"lng": -122.7666515,
		"pop": 64132.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Fort Nelson",
		"lat": 58.81670575,
		"lng": -122.5329706,
		"pop": 6315,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Pond Inlet",
		"lat": 72.68498069,
		"lng": -78.00005579,
		"pop": 1549,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Nunavut"
	},
	{
		"city": "Cape Dorset",
		"lat": 64.31251972,
		"lng": -76.53857863,
		"pop": 1326,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Nunavut"
	},
	{
		"city": "Gjoa Haven",
		"lat": 68.63329002,
		"lng": -95.91666244,
		"pop": 1109,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Nunavut"
	},
	{
		"city": "Rankin Inlet",
		"lat": 62.81666831,
		"lng": -92.09531946,
		"pop": 2403,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Nunavut"
	},
	{
		"city": "Inuvik",
		"lat": 68.34997398,
		"lng": -133.6999893,
		"pop": 3022,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Northwest Territories"
	},
	{
		"city": "Moosonee",
		"lat": 51.28060244,
		"lng": -80.65798141,
		"pop": 1725,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Sudbury",
		"lat": 46.49998985,
		"lng": -80.96664474,
		"pop": 119182,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Kenora",
		"lat": 49.76668968,
		"lng": -94.46664758,
		"pop": 10852,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Gaspe",
		"lat": 48.83731488,
		"lng": -64.49336084,
		"pop": 3504,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Dolbeau",
		"lat": 48.86658958,
		"lng": -72.23332768,
		"pop": 13126.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Val d'Or",
		"lat": 48.11663535,
		"lng": -77.76663334,
		"pop": 20625,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Inukjuak",
		"lat": 58.47000856,
		"lng": -78.13599064,
		"pop": 1597,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Chicoutimi",
		"lat": 48.43330853,
		"lng": -71.06670638,
		"pop": 53940,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Moncton",
		"lat": 46.08334861,
		"lng": -64.76667749,
		"pop": 89051,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "New Brunswick"
	},
	{
		"city": "Fredericton",
		"lat": 45.94999758,
		"lng": -66.63330774,
		"pop": 44525,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "New Brunswick"
	},
	{
		"city": "Bathurst",
		"lat": 47.59997438,
		"lng": -65.64998275,
		"pop": 5303.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "New Brunswick"
	},
	{
		"city": "Yarmouth",
		"lat": 43.83079447,
		"lng": -66.1125812,
		"pop": 7433,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Nova Scotia"
	},
	{
		"city": "Gander",
		"lat": 48.94999534,
		"lng": -54.54998845,
		"pop": 3345,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Newfoundland and Labrador"
	},
	{
		"city": "Port Burwell",
		"lat": 60.26646222,
		"lng": -64.74109766,
		"pop": 2762,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Newfoundland and Labrador"
	},
	{
		"city": "Thompson",
		"lat": 55.74994204,
		"lng": -97.86662093,
		"pop": 13097,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Manitoba"
	},
	{
		"city": "Brandon",
		"lat": 49.83327476,
		"lng": -99.94998214,
		"pop": 27326,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Manitoba"
	},
	{
		"city": "Fort McMurray",
		"lat": 56.7333187,
		"lng": -111.3833153,
		"pop": 21863,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Alberta"
	},
	{
		"city": "Peace River",
		"lat": 56.23332338,
		"lng": -117.2832911,
		"pop": 5014.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Alberta"
	},
	{
		"city": "Fort St. John",
		"lat": 56.24998903,
		"lng": -120.8332811,
		"pop": 18089,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Iqaluit",
		"lat": 63.75045938,
		"lng": -68.50019175,
		"pop": 6124,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Nunavut"
	},
	{
		"city": "Cambridge Bay",
		"lat": 69.11695559,
		"lng": -105.0333153,
		"pop": 1477,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Nunavut"
	},
	{
		"city": "Kugluktuk",
		"lat": 67.79866282,
		"lng": -115.1253504,
		"pop": 1302,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Nunavut"
	},
	{
		"city": "Arviat",
		"lat": 61.10859211,
		"lng": -94.05860672,
		"pop": 1868,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Nunavut"
	},
	{
		"city": "Igloolik",
		"lat": 69.25653506,
		"lng": -81.79359213,
		"pop": 1612,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Nunavut"
	},
	{
		"city": "Dawson",
		"lat": 64.0666437,
		"lng": -139.4166687,
		"pop": 1319,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Yukon"
	},
	{
		"city": "Timmins",
		"lat": 48.46658815,
		"lng": -81.33331486,
		"pop": 33937.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "North Bay",
		"lat": 46.30000205,
		"lng": -79.44999313,
		"pop": 45988.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Kuujjuarapik",
		"lat": 55.28149518,
		"lng": -77.76583236,
		"pop": 1243,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Kuujjuaq",
		"lat": 58.10000531,
		"lng": -68.39999577,
		"pop": 1273,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Sydney",
		"lat": 46.06611452,
		"lng": -60.17998071,
		"pop": 37538,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Nova Scotia"
	},
	{
		"city": "Labrador City",
		"lat": 52.94143129,
		"lng": -66.91587447,
		"pop": 8840,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Newfoundland and Labrador"
	},
	{
		"city": "Winnipeg",
		"lat": 49.88298749,
		"lng": -97.16599186,
		"pop": 603688,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Manitoba"
	},
	{
		"city": "Regina",
		"lat": 50.45003298,
		"lng": -104.6170099,
		"pop": 176183,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Saskatchewan"
	},
	{
		"city": "Saskatoon",
		"lat": 52.17003135,
		"lng": -106.6699854,
		"pop": 194075.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Saskatchewan"
	},
	{
		"city": "Calgary",
		"lat": 51.08299176,
		"lng": -114.0799982,
		"pop": 1012661,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Alberta"
	},
	{
		"city": "Prince Rupert",
		"lat": 54.31667035,
		"lng": -130.3299882,
		"pop": 14708,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Victoria",
		"lat": 48.43328269,
		"lng": -123.3500009,
		"pop": 270491.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Yellowknife",
		"lat": 62.44201418,
		"lng": -114.3969814,
		"pop": 18658.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Northwest Territories"
	},
	{
		"city": "Whitehorse",
		"lat": 60.71671897,
		"lng": -135.0499844,
		"pop": 23274,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Yukon"
	},
	{
		"city": "Ottawa",
		"lat": 45.4166968,
		"lng": -75.7000153,
		"pop": 978564.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Thunder Bay",
		"lat": 48.44615013,
		"lng": -89.27497481,
		"pop": 98354,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Quebec",
		"lat": 46.83996909,
		"lng": -71.24561019,
		"pop": 576386,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Halifax",
		"lat": 44.65002525,
		"lng": -63.60000452,
		"pop": 290992.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Nova Scotia"
	},
	{
		"city": "St. John's",
		"lat": 47.58498822,
		"lng": -52.68100692,
		"pop": 115325.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Newfoundland and Labrador"
	},
	{
		"city": "Nain",
		"lat": 56.54735147,
		"lng": -61.6860454,
		"pop": 1151,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Newfoundland and Labrador"
	},
	{
		"city": "Charlottetown",
		"lat": 46.24928164,
		"lng": -63.13132512,
		"pop": 36847.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Prince Edward Island"
	},
	{
		"city": "Edmonton",
		"lat": 53.55002464,
		"lng": -113.4999819,
		"pop": 885195.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Alberta"
	},
	{
		"city": "Montréal",
		"lat": 45.49999921,
		"lng": -73.58329696,
		"pop": 3017278,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Québec"
	},
	{
		"city": "Vancouver",
		"lat": 49.27341658,
		"lng": -123.1216442,
		"pop": 1458415,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "British Columbia"
	},
	{
		"city": "Toronto",
		"lat": 43.69997988,
		"lng": -79.42002079,
		"pop": 4573710.5,
		"iso2": "CA",
		"iso3": "CAN",
		"prov": "Ontario"
	},
	{
		"city": "Bangui",
		"lat": 4.366644306,
		"lng": 18.55828813,
		"pop": 727348,
		"iso2": "CF",
		"iso3": "CAF",
		"prov": "Bangui"
	},
	{
		"city": "Ndjamena",
		"lat": 12.11309654,
		"lng": 15.04914831,
		"pop": 835193.5,
		"iso2": "TD",
		"iso3": "TCD",
		"prov": "Hadjer-Lamis"
	},
	{
		"city": "Vina del Mar",
		"lat": -33.02998777,
		"lng": -71.53998499,
		"pop": 399042.5,
		"iso2": "CL",
		"iso3": "CHL",
		"prov": "Valparaíso"
	},
	{
		"city": "Valparaiso",
		"lat": -33.04776447,
		"lng": -71.62101363,
		"pop": 434969,
		"iso2": "CL",
		"iso3": "CHL",
		"prov": "Valparaíso"
	},
	{
		"city": "Concepcion",
		"lat": -36.83001422,
		"lng": -73.05002202,
		"pop": 550864,
		"iso2": "CL",
		"iso3": "CHL",
		"prov": "Bío-Bío"
	},
	{
		"city": "Santiago",
		"lat": -33.45001382,
		"lng": -70.66704085,
		"pop": 2883305.5,
		"iso2": "CL",
		"iso3": "CHL",
		"prov": "Región Metropolitana de Santiago"
	},
	{
		"city": "Linxia",
		"lat": 35.60000917,
		"lng": 103.2000468,
		"pop": 368478.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Gansu"
	},
	{
		"city": "Zuozhou",
		"lat": 39.54005292,
		"lng": 115.789976,
		"pop": 415000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Beijing"
	},
	{
		"city": "Chaozhou",
		"lat": 23.68003908,
		"lng": 116.630028,
		"pop": 424787,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guangdong"
	},
	{
		"city": "Yangquan",
		"lat": 37.86997398,
		"lng": 113.5700081,
		"pop": 851801.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shanxi"
	},
	{
		"city": "Shiyan",
		"lat": 32.57003908,
		"lng": 110.7799975,
		"pop": 653823.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hubei"
	},
	{
		"city": "Shashi",
		"lat": 30.32002138,
		"lng": 112.2299865,
		"pop": 509390,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hubei"
	},
	{
		"city": "Mengzi",
		"lat": 23.3619448,
		"lng": 103.4061324,
		"pop": 303341,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Yunnan"
	},
	{
		"city": "Hengshui",
		"lat": 37.71998313,
		"lng": 115.7000073,
		"pop": 456356,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hebei"
	},
	{
		"city": "Xuanhua",
		"lat": 40.59440716,
		"lng": 115.0243379,
		"pop": 391583.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hebei"
	},
	{
		"city": "Luohe",
		"lat": 33.57000388,
		"lng": 114.02998,
		"pop": 417356,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Henan"
	},
	{
		"city": "Wafangdian",
		"lat": 39.62591331,
		"lng": 121.9959537,
		"pop": 303217.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Liaoning"
	},
	{
		"city": "Zhucheng",
		"lat": 35.98995953,
		"lng": 119.3800927,
		"pop": 881963.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shandong"
	},
	{
		"city": "Xinyi",
		"lat": 34.38000612,
		"lng": 118.3500264,
		"pop": 962656,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangsu"
	},
	{
		"city": "Yangzhou",
		"lat": 32.39999778,
		"lng": 119.4300122,
		"pop": 539715,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangsu"
	},
	{
		"city": "Baishan",
		"lat": 41.90001223,
		"lng": 126.4299983,
		"pop": 330000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jilin"
	},
	{
		"city": "Yanji",
		"lat": 42.88230369,
		"lng": 129.5127559,
		"pop": 407848.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jilin"
	},
	{
		"city": "Longxi",
		"lat": 35.04763979,
		"lng": 104.6394421,
		"pop": 355037,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Gansu"
	},
	{
		"city": "Beihai",
		"lat": 21.4804059,
		"lng": 109.1000484,
		"pop": 567289,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guangxi"
	},
	{
		"city": "Hechi",
		"lat": 23.09653465,
		"lng": 109.6091129,
		"pop": 3275189.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guangxi"
	},
	{
		"city": "Changping",
		"lat": 40.22476564,
		"lng": 116.1943957,
		"pop": 372410.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Beijing"
	},
	{
		"city": "Longyan",
		"lat": 25.18041262,
		"lng": 117.0300036,
		"pop": 367896,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Fujian"
	},
	{
		"city": "Zhangzhou",
		"lat": 24.52037539,
		"lng": 117.6700162,
		"pop": 2434799.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Fujian"
	},
	{
		"city": "Putian",
		"lat": 25.43034568,
		"lng": 119.0200114,
		"pop": 376558,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Fujian"
	},
	{
		"city": "Tongling",
		"lat": 30.95044802,
		"lng": 117.7800354,
		"pop": 437710,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Anhui"
	},
	{
		"city": "Maanshan",
		"lat": 31.73040041,
		"lng": 118.4800443,
		"pop": 1000121,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Anhui"
	},
	{
		"city": "Yangjiang",
		"lat": 21.85040916,
		"lng": 111.9700024,
		"pop": 751181.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guangdong"
	},
	{
		"city": "Qingyuan",
		"lat": 23.7003996,
		"lng": 113.0300927,
		"pop": 706717,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guangdong"
	},
	{
		"city": "Zhaoqing",
		"lat": 23.05041343,
		"lng": 112.4500248,
		"pop": 420984.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guangdong"
	},
	{
		"city": "Jiangmen",
		"lat": 22.58039044,
		"lng": 113.0800122,
		"pop": 532419,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guangdong"
	},
	{
		"city": "Maoming",
		"lat": 21.92040489,
		"lng": 110.8700179,
		"pop": 1217715,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guangdong"
	},
	{
		"city": "Shuozhou",
		"lat": 39.30037762,
		"lng": 112.4200008,
		"pop": 408068.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shanxi"
	},
	{
		"city": "Jincheng",
		"lat": 35.50037701,
		"lng": 112.8300016,
		"pop": 520000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shanxi"
	},
	{
		"city": "Changzhi",
		"lat": 36.18387534,
		"lng": 113.1052819,
		"pop": 706000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shanxi"
	},
	{
		"city": "Jingmen",
		"lat": 31.03039146,
		"lng": 112.1000203,
		"pop": 400000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hubei"
	},
	{
		"city": "Xiangtan",
		"lat": 27.85043052,
		"lng": 112.9000232,
		"pop": 2183454,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hunan"
	},
	{
		"city": "Zigong",
		"lat": 29.40000002,
		"lng": 104.780002,
		"pop": 897480.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Sichuan"
	},
	{
		"city": "Yaan",
		"lat": 29.98042971,
		"lng": 103.0800024,
		"pop": 340000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Sichuan"
	},
	{
		"city": "Zhanyi",
		"lat": 25.6004645,
		"lng": 103.8166499,
		"pop": 652604,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Yunnan"
	},
	{
		"city": "Chengde",
		"lat": 40.96037966,
		"lng": 117.9300004,
		"pop": 377629,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hebei"
	},
	{
		"city": "Cangzhou",
		"lat": 38.32038576,
		"lng": 116.8700134,
		"pop": 527681,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hebei"
	},
	{
		"city": "Baoding",
		"lat": 38.87042971,
		"lng": 115.4800207,
		"pop": 1051326,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hebei"
	},
	{
		"city": "Xiangtai",
		"lat": 37.04997235,
		"lng": 114.5000288,
		"pop": 611739,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hebei"
	},
	{
		"city": "Puyang",
		"lat": 35.70039064,
		"lng": 114.9799996,
		"pop": 666322,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Henan"
	},
	{
		"city": "Xuchang",
		"lat": 34.02038983,
		"lng": 113.8200187,
		"pop": 449258,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Henan"
	},
	{
		"city": "Zhoukou",
		"lat": 33.63041363,
		"lng": 114.6300468,
		"pop": 377061,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Henan"
	},
	{
		"city": "Tieling",
		"lat": 42.30037539,
		"lng": 123.8199768,
		"pop": 336953.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Liaoning"
	},
	{
		"city": "Chaoyang",
		"lat": 41.55042116,
		"lng": 120.4199776,
		"pop": 440150.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Liaoning"
	},
	{
		"city": "Rizhao",
		"lat": 35.43038129,
		"lng": 119.4500109,
		"pop": 555693.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shandong"
	},
	{
		"city": "Dezhou",
		"lat": 37.45041302,
		"lng": 116.3000223,
		"pop": 379555,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shandong"
	},
	{
		"city": "Jian",
		"lat": 27.13042279,
		"lng": 114.9999983,
		"pop": 490221,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangxi"
	},
	{
		"city": "Shangrao",
		"lat": 28.47039268,
		"lng": 117.9699979,
		"pop": 922421.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangxi"
	},
	{
		"city": "Jingdezhen",
		"lat": 29.27042137,
		"lng": 117.1800203,
		"pop": 383931.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangxi"
	},
	{
		"city": "Taizhou",
		"lat": 32.4904057,
		"lng": 119.9000093,
		"pop": 612356,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangsu"
	},
	{
		"city": "Shuyang",
		"lat": 34.12986635,
		"lng": 118.7733597,
		"pop": 1770000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangsu"
	},
	{
		"city": "Lianyungang",
		"lat": 34.60043194,
		"lng": 119.170028,
		"pop": 715600,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangsu"
	},
	{
		"city": "Jiaojing",
		"lat": 28.6804057,
		"lng": 121.4499922,
		"pop": 471152,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Zhejiang"
	},
	{
		"city": "Shuangyashan",
		"lat": 46.67041872,
		"lng": 131.3500081,
		"pop": 500000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Heilongjiang"
	},
	{
		"city": "Liuzhou",
		"lat": 24.28000246,
		"lng": 109.2500134,
		"pop": 1436030.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guangxi"
	},
	{
		"city": "Xingyi",
		"lat": 25.09041811,
		"lng": 104.8900211,
		"pop": 539536,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guizhou"
	},
	{
		"city": "Anshun",
		"lat": 26.25039899,
		"lng": 105.9300093,
		"pop": 600468,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guizhou"
	},
	{
		"city": "Zunyi",
		"lat": 27.70002626,
		"lng": 106.9200264,
		"pop": 657646,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guizhou"
	},
	{
		"city": "Wanxian",
		"lat": 30.81999086,
		"lng": 108.4000394,
		"pop": 1680000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Chongqing"
	},
	{
		"city": "Huaibei",
		"lat": 33.95036826,
		"lng": 116.7500207,
		"pop": 908019.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Anhui"
	},
	{
		"city": "Wuhu",
		"lat": 31.3504236,
		"lng": 118.3699735,
		"pop": 658762,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Anhui"
	},
	{
		"city": "Luan",
		"lat": 31.75034751,
		"lng": 116.4800114,
		"pop": 1408227.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Anhui"
	},
	{
		"city": "Bengbu",
		"lat": 32.94999005,
		"lng": 117.330037,
		"pop": 735324,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Anhui"
	},
	{
		"city": "Anqing",
		"lat": 30.49995872,
		"lng": 117.0500024,
		"pop": 469579,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Anhui"
	},
	{
		"city": "Foshan",
		"lat": 23.03005292,
		"lng": 113.1200097,
		"pop": 785174,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guangdong"
	},
	{
		"city": "Shihezi",
		"lat": 44.29996909,
		"lng": 86.02993201,
		"pop": 572977,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Xinjiang Uygur"
	},
	{
		"city": "Aksu",
		"lat": 41.15000633,
		"lng": 80.25002641,
		"pop": 309704.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Xinjiang Uygur"
	},
	{
		"city": "Haikou",
		"lat": 20.05000226,
		"lng": 110.3200256,
		"pop": 1606808.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hainan"
	},
	{
		"city": "Baoji",
		"lat": 34.38000612,
		"lng": 107.1499865,
		"pop": 800000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shaanxi"
	},
	{
		"city": "Linfen",
		"lat": 36.08034161,
		"lng": 111.520004,
		"pop": 533283,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shanxi"
	},
	{
		"city": "Yuci",
		"lat": 37.68039899,
		"lng": 112.7300077,
		"pop": 537964.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shanxi"
	},
	{
		"city": "Datong",
		"lat": 40.08001996,
		"lng": 113.2999987,
		"pop": 1462839,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shanxi"
	},
	{
		"city": "Jianmen",
		"lat": 30.65005292,
		"lng": 113.1600073,
		"pop": 937875,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hubei"
	},
	{
		"city": "Yichang",
		"lat": 30.69997235,
		"lng": 111.2800187,
		"pop": 675862.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hubei"
	},
	{
		"city": "Xiantao",
		"lat": 30.3704059,
		"lng": 113.4400419,
		"pop": 897703,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hubei"
	},
	{
		"city": "Huangshi",
		"lat": 30.22000165,
		"lng": 115.0999922,
		"pop": 688090,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hubei"
	},
	{
		"city": "Zhuzhou",
		"lat": 27.82999249,
		"lng": 113.1500337,
		"pop": 894679,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hunan"
	},
	{
		"city": "Yongzhou",
		"lat": 26.23037437,
		"lng": 111.6199979,
		"pop": 700180.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hunan"
	},
	{
		"city": "Yiyang",
		"lat": 28.60041058,
		"lng": 112.3300321,
		"pop": 777304,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hunan"
	},
	{
		"city": "Changde",
		"lat": 29.02999676,
		"lng": 111.6800459,
		"pop": 993390,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hunan"
	},
	{
		"city": "Leshan",
		"lat": 29.56709576,
		"lng": 103.7333475,
		"pop": 655738.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Sichuan"
	},
	{
		"city": "Panzhihua",
		"lat": 26.5499931,
		"lng": 101.7300073,
		"pop": 446298,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Sichuan"
	},
	{
		"city": "Guangyuan",
		"lat": 32.42999595,
		"lng": 105.870013,
		"pop": 325400,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Sichuan"
	},
	{
		"city": "Luzhou",
		"lat": 28.87998008,
		"lng": 105.380017,
		"pop": 1537000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Sichuan"
	},
	{
		"city": "Yibin",
		"lat": 28.7699868,
		"lng": 104.5700406,
		"pop": 572055.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Sichuan"
	},
	{
		"city": "Zhaotang",
		"lat": 27.32038535,
		"lng": 103.720015,
		"pop": 459200,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Yunnan"
	},
	{
		"city": "Qinhuangdao",
		"lat": 39.93036501,
		"lng": 119.6200264,
		"pop": 881359,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hebei"
	},
	{
		"city": "Langfang",
		"lat": 39.5203642,
		"lng": 116.6799991,
		"pop": 694465.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hebei"
	},
	{
		"city": "Zhangjiakou",
		"lat": 40.83000002,
		"lng": 114.9299768,
		"pop": 802820.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hebei"
	},
	{
		"city": "Tangshan",
		"lat": 39.62433718,
		"lng": 118.194377,
		"pop": 1737974.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hebei"
	},
	{
		"city": "Anyang",
		"lat": 36.07997988,
		"lng": 114.3500122,
		"pop": 834064.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Henan"
	},
	{
		"city": "Jiaozuo",
		"lat": 35.2500047,
		"lng": 113.2200036,
		"pop": 687270,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Henan"
	},
	{
		"city": "Kaifeng",
		"lat": 34.85000327,
		"lng": 114.3500122,
		"pop": 872000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Henan"
	},
	{
		"city": "Shangqiu",
		"lat": 34.45041526,
		"lng": 115.6500362,
		"pop": 967109,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Henan"
	},
	{
		"city": "Pingdingshan",
		"lat": 33.73040753,
		"lng": 113.2999987,
		"pop": 849000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Henan"
	},
	{
		"city": "Xinyang",
		"lat": 32.130376,
		"lng": 114.0699776,
		"pop": 1411944,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Henan"
	},
	{
		"city": "Xinxiang",
		"lat": 35.32043968,
		"lng": 113.8699898,
		"pop": 823300.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Henan"
	},
	{
		"city": "Luoyang",
		"lat": 34.67998781,
		"lng": 112.4700752,
		"pop": 1552790.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Henan"
	},
	{
		"city": "Liaoyang",
		"lat": 41.27999839,
		"lng": 123.1800158,
		"pop": 740945,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Liaoning"
	},
	{
		"city": "Dandong",
		"lat": 40.14360781,
		"lng": 124.3935852,
		"pop": 750986.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Liaoning"
	},
	{
		"city": "Yingkow",
		"lat": 40.67034568,
		"lng": 122.2800191,
		"pop": 693079.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Liaoning"
	},
	{
		"city": "Jinzhou",
		"lat": 41.12036989,
		"lng": 121.1000394,
		"pop": 780134.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Liaoning"
	},
	{
		"city": "Fuxin",
		"lat": 42.0104706,
		"lng": 121.6600052,
		"pop": 729525,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Liaoning"
	},
	{
		"city": "Benxi",
		"lat": 41.33038291,
		"lng": 123.7500069,
		"pop": 923933,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Liaoning"
	},
	{
		"city": "Fushun",
		"lat": 41.86538902,
		"lng": 123.8699996,
		"pop": 1435323,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Liaoning"
	},
	{
		"city": "Jining",
		"lat": 35.40040895,
		"lng": 116.5500329,
		"pop": 818163.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shandong"
	},
	{
		"city": "Weifang",
		"lat": 36.7204059,
		"lng": 119.1001098,
		"pop": 973866,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shandong"
	},
	{
		"city": "Taian",
		"lat": 36.19999839,
		"lng": 117.1200756,
		"pop": 1629000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shandong"
	},
	{
		"city": "Heze",
		"lat": 35.22998008,
		"lng": 115.4500484,
		"pop": 796301,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shandong"
	},
	{
		"city": "Xinyu",
		"lat": 27.80002016,
		"lng": 114.9299768,
		"pop": 505240,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangxi"
	},
	{
		"city": "Ganzhou",
		"lat": 25.91997988,
		"lng": 114.9500272,
		"pop": 1216134.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangxi"
	},
	{
		"city": "Jiujiang",
		"lat": 29.72997988,
		"lng": 115.9800419,
		"pop": 545616,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangxi"
	},
	{
		"city": "Changzhou",
		"lat": 31.77998395,
		"lng": 119.9699792,
		"pop": 1138009,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangsu"
	},
	{
		"city": "Zhenjiang",
		"lat": 32.21998293,
		"lng": 119.4300122,
		"pop": 743276,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangsu"
	},
	{
		"city": "Nantong",
		"lat": 32.0303821,
		"lng": 120.8250175,
		"pop": 806625.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangsu"
	},
	{
		"city": "Jiaxing",
		"lat": 30.77040733,
		"lng": 120.7499833,
		"pop": 727050.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Zhejiang"
	},
	{
		"city": "Huzhou",
		"lat": 30.87037539,
		"lng": 120.0999971,
		"pop": 694660,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Zhejiang"
	},
	{
		"city": "Shaoxing",
		"lat": 30.00037681,
		"lng": 120.5700459,
		"pop": 599141.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Zhejiang"
	},
	{
		"city": "Jinhua",
		"lat": 29.12004295,
		"lng": 119.6499987,
		"pop": 617529,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Zhejiang"
	},
	{
		"city": "Liaoyuan",
		"lat": 42.89997703,
		"lng": 125.1299743,
		"pop": 485898.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jilin"
	},
	{
		"city": "Siping",
		"lat": 43.17001223,
		"lng": 124.3300232,
		"pop": 528811,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jilin"
	},
	{
		"city": "Baicheng",
		"lat": 45.62001772,
		"lng": 122.8200378,
		"pop": 351915.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jilin"
	},
	{
		"city": "Qitaihe",
		"lat": 45.7999809,
		"lng": 130.8500386,
		"pop": 397825,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Heilongjiang"
	},
	{
		"city": "Yichun",
		"lat": 47.69994244,
		"lng": 128.8999768,
		"pop": 443111.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Heilongjiang"
	},
	{
		"city": "Hegang",
		"lat": 47.40001243,
		"lng": 130.3700162,
		"pop": 657833.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Heilongjiang"
	},
	{
		"city": "Mudangiang",
		"lat": 44.57501691,
		"lng": 129.5900122,
		"pop": 954957.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Heilongjiang"
	},
	{
		"city": "Xuanzhou",
		"lat": 30.9525,
		"lng": 118.7552778,
		"pop": 866000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Anhui"
	},
	{
		"city": "Zhuhai",
		"lat": 22.2769444,
		"lng": 113.5677778,
		"pop": 1023000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guangdong"
	},
	{
		"city": "Xianyang",
		"lat": 34.3455556,
		"lng": 108.7147222,
		"pop": 1126000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shaanxi"
	},
	{
		"city": "Xiangfan",
		"lat": 32.01999514,
		"lng": 112.1300443,
		"pop": 765978,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hubei"
	},
	{
		"city": "Suining",
		"lat": 30.5333333,
		"lng": 105.5333333,
		"pop": 1425000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Sichuan"
	},
	{
		"city": "Lingyuan",
		"lat": 41.24,
		"lng": 119.4011111,
		"pop": 806000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Liaoning"
	},
	{
		"city": "Weihai",
		"lat": 37.49997072,
		"lng": 122.0999784,
		"pop": 356425,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shandong"
	},
	{
		"city": "Yichun",
		"lat": 27.8333333,
		"lng": 114.4,
		"pop": 982000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangxi"
	},
	{
		"city": "Yancheng",
		"lat": 33.3855556,
		"lng": 120.1252778,
		"pop": 839000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangsu"
	},
	{
		"city": "Fuyang",
		"lat": 30.0533333,
		"lng": 119.9519444,
		"pop": 771000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Zhejiang"
	},
	{
		"city": "Xiamen",
		"lat": 24.44999208,
		"lng": 118.080017,
		"pop": 1548668.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Fujian"
	},
	{
		"city": "Nanchong",
		"lat": 30.78043256,
		"lng": 106.1299971,
		"pop": 2174000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Sichuan"
	},
	{
		"city": "Neijiang",
		"lat": 29.58037661,
		"lng": 105.0500114,
		"pop": 1006427,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Sichuan"
	},
	{
		"city": "Nanyang",
		"lat": 33.00040041,
		"lng": 112.5300199,
		"pop": 1097766,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Henan"
	},
	{
		"city": "Jinxi",
		"lat": 40.7503408,
		"lng": 120.8299784,
		"pop": 1369623.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Liaoning"
	},
	{
		"city": "Yantai",
		"lat": 37.53040814,
		"lng": 121.4000211,
		"pop": 1417666,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shandong"
	},
	{
		"city": "Zaozhuang",
		"lat": 34.88000144,
		"lng": 117.5700223,
		"pop": 1164332.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shandong"
	},
	{
		"city": "Suzhou",
		"lat": 31.30047833,
		"lng": 120.620017,
		"pop": 1496545.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangsu"
	},
	{
		"city": "Xuzhou",
		"lat": 34.28001223,
		"lng": 117.1800203,
		"pop": 1645096.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangsu"
	},
	{
		"city": "Wuxi",
		"lat": 31.57999615,
		"lng": 120.2999849,
		"pop": 1428823.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangsu"
	},
	{
		"city": "Jilin",
		"lat": 43.84997072,
		"lng": 126.5500427,
		"pop": 2138988.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jilin"
	},
	{
		"city": "Wuwei",
		"lat": 37.92800661,
		"lng": 102.6410111,
		"pop": 493092,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Gansu"
	},
	{
		"city": "Tianshui",
		"lat": 34.60001853,
		"lng": 105.9199841,
		"pop": 649883.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Gansu"
	},
	{
		"city": "Yulin",
		"lat": 22.62997398,
		"lng": 110.1500101,
		"pop": 637742.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guangxi"
	},
	{
		"city": "Wuzhou",
		"lat": 23.48002545,
		"lng": 111.3200162,
		"pop": 354080.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guangxi"
	},
	{
		"city": "Lupanshui",
		"lat": 26.59443483,
		"lng": 104.8333321,
		"pop": 886256,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guizhou"
	},
	{
		"city": "Quanzhou",
		"lat": 24.9000163,
		"lng": 118.5799865,
		"pop": 823571.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Fujian"
	},
	{
		"city": "Hefei",
		"lat": 31.85003135,
		"lng": 117.2800142,
		"pop": 1711952,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Anhui"
	},
	{
		"city": "Suzhou",
		"lat": 33.6361111,
		"lng": 116.9788889,
		"pop": 1964000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Anhui"
	},
	{
		"city": "Zhanjiang",
		"lat": 21.19998374,
		"lng": 110.3800219,
		"pop": 1113895,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guangdong"
	},
	{
		"city": "Shaoguan",
		"lat": 24.79997072,
		"lng": 113.5799816,
		"pop": 674507.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guangdong"
	},
	{
		"city": "Yining",
		"lat": 43.90001935,
		"lng": 81.35001094,
		"pop": 403489,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Xinjiang Uygur"
	},
	{
		"city": "Ankang",
		"lat": 32.67998069,
		"lng": 109.0200016,
		"pop": 1025000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shaanxi"
	},
	{
		"city": "Yueyang",
		"lat": 29.38005292,
		"lng": 113.1000109,
		"pop": 826000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hunan"
	},
	{
		"city": "Hengyang",
		"lat": 26.88002464,
		"lng": 112.5900162,
		"pop": 887801,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hunan"
	},
	{
		"city": "Mianyang",
		"lat": 31.46997703,
		"lng": 104.7699768,
		"pop": 830068,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Sichuan"
	},
	{
		"city": "Baoshan",
		"lat": 25.11997703,
		"lng": 99.15000972,
		"pop": 925000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Yunnan"
	},
	{
		"city": "Shijianzhuang",
		"lat": 38.05001467,
		"lng": 114.4799784,
		"pop": 2204737,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hebei"
	},
	{
		"city": "Handan",
		"lat": 36.5799752,
		"lng": 114.4799784,
		"pop": 1494659,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hebei"
	},
	{
		"city": "Anshan",
		"lat": 41.11502138,
		"lng": 122.9400305,
		"pop": 1419137.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Liaoning"
	},
	{
		"city": "Dalian",
		"lat": 38.92283839,
		"lng": 121.6298308,
		"pop": 2601153.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Liaoning"
	},
	{
		"city": "Qingdao",
		"lat": 36.08997927,
		"lng": 120.3300089,
		"pop": 2254122.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shandong"
	},
	{
		"city": "Linyi",
		"lat": 35.07998924,
		"lng": 118.329976,
		"pop": 1176334.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shandong"
	},
	{
		"city": "Huaiyin",
		"lat": 33.58000327,
		"lng": 119.0299849,
		"pop": 909615,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangsu"
	},
	{
		"city": "Wenzhou",
		"lat": 28.0199809,
		"lng": 120.6500927,
		"pop": 1607836,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Zhejiang"
	},
	{
		"city": "Ningbo",
		"lat": 29.87997072,
		"lng": 121.5500378,
		"pop": 1321433.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Zhejiang"
	},
	{
		"city": "Tongliao",
		"lat": 43.61995892,
		"lng": 122.2699939,
		"pop": 572555,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Nei Mongol"
	},
	{
		"city": "Hohhot",
		"lat": 40.81997479,
		"lng": 111.6599955,
		"pop": 1250238.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Nei Mongol"
	},
	{
		"city": "Chifeng",
		"lat": 42.27001548,
		"lng": 118.9499898,
		"pop": 811827,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Nei Mongol"
	},
	{
		"city": "Jiamusi",
		"lat": 46.83002138,
		"lng": 130.3500175,
		"pop": 784774.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Heilongjiang"
	},
	{
		"city": "Daqing",
		"lat": 46.57995913,
		"lng": 125.0000081,
		"pop": 948244,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Heilongjiang"
	},
	{
		"city": "Jixi",
		"lat": 45.29995974,
		"lng": 130.9700313,
		"pop": 684379.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Heilongjiang"
	},
	{
		"city": "Xining",
		"lat": 36.6199986,
		"lng": 101.7700048,
		"pop": 907765.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Gansu"
	},
	{
		"city": "Guilin",
		"lat": 25.2799931,
		"lng": 110.280028,
		"pop": 818176,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guangxi"
	},
	{
		"city": "Huainan",
		"lat": 32.62998374,
		"lng": 116.9799808,
		"pop": 1239327.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Anhui"
	},
	{
		"city": "Shantou",
		"lat": 23.37000633,
		"lng": 116.6700256,
		"pop": 1467486.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guangdong"
	},
	{
		"city": "Kashi",
		"lat": 39.47633588,
		"lng": 75.9699259,
		"pop": 472069.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Xinjiang Uygur"
	},
	{
		"city": "Yinchuan",
		"lat": 38.46797365,
		"lng": 106.2730375,
		"pop": 657614,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Ningxia Hui"
	},
	{
		"city": "Pingxiang",
		"lat": 27.62000531,
		"lng": 113.8500427,
		"pop": 666561.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangxi"
	},
	{
		"city": "Qiqihar",
		"lat": 47.34497703,
		"lng": 123.9899922,
		"pop": 1261682,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Heilongjiang"
	},
	{
		"city": "Shenzhen",
		"lat": 22.55237051,
		"lng": 114.1221231,
		"pop": 4291796,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guangdong"
	},
	{
		"city": "Zibo",
		"lat": 36.79998761,
		"lng": 118.049993,
		"pop": 1865385,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shandong"
	},
	{
		"city": "Lanzhou",
		"lat": 36.05602785,
		"lng": 103.7920003,
		"pop": 2282609,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Gansu"
	},
	{
		"city": "Nanning",
		"lat": 22.81998822,
		"lng": 108.3200443,
		"pop": 1485394,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guangxi"
	},
	{
		"city": "Guiyang",
		"lat": 26.58004295,
		"lng": 106.7200386,
		"pop": 2416816.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guizhou"
	},
	{
		"city": "Chongqing",
		"lat": 29.56497703,
		"lng": 106.5949816,
		"pop": 5214014,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Chongqing"
	},
	{
		"city": "Fuzhou",
		"lat": 26.07999595,
		"lng": 119.3000459,
		"pop": 1892860,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Fujian"
	},
	{
		"city": "Guangzhou",
		"lat": 23.1449813,
		"lng": 113.3250101,
		"pop": 5990912.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guangdong"
	},
	{
		"city": "Dongguan",
		"lat": 23.0488889,
		"lng": 113.7447222,
		"pop": 4528000,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Guangdong"
	},
	{
		"city": "Xian",
		"lat": 34.27502545,
		"lng": 108.8949963,
		"pop": 3617406,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shaanxi"
	},
	{
		"city": "Taiyuan",
		"lat": 37.87501243,
		"lng": 112.5450577,
		"pop": 2817737.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shanxi"
	},
	{
		"city": "Wuhan",
		"lat": 30.58003135,
		"lng": 114.270017,
		"pop": 5713603,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hubei"
	},
	{
		"city": "Changsha",
		"lat": 28.19996991,
		"lng": 112.969993,
		"pop": 2338969,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Hunan"
	},
	{
		"city": "Kunming",
		"lat": 25.06998008,
		"lng": 102.6799751,
		"pop": 1977337,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Yunnan"
	},
	{
		"city": "Zhengzhou",
		"lat": 34.75499615,
		"lng": 113.6650927,
		"pop": 2325062.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Henan"
	},
	{
		"city": "Shenyeng",
		"lat": 41.80497927,
		"lng": 123.4499735,
		"pop": 4149596,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Liaoning"
	},
	{
		"city": "Jinan",
		"lat": 36.67498232,
		"lng": 116.9950187,
		"pop": 2433633,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shandong"
	},
	{
		"city": "Tianjin",
		"lat": 39.13002626,
		"lng": 117.2000191,
		"pop": 5473103.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Tianjin"
	},
	{
		"city": "Nanchang",
		"lat": 28.67999229,
		"lng": 115.8799963,
		"pop": 2110675.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangxi"
	},
	{
		"city": "Nanjing",
		"lat": 32.05001914,
		"lng": 118.7799743,
		"pop": 3383005,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jiangsu"
	},
	{
		"city": "Hangzhou",
		"lat": 30.24997398,
		"lng": 120.1700187,
		"pop": 2442564.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Zhejiang"
	},
	{
		"city": "Changchun",
		"lat": 43.86500856,
		"lng": 125.3399873,
		"pop": 2860210.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Jilin"
	},
	{
		"city": "Baotou",
		"lat": 40.65220725,
		"lng": 109.8220198,
		"pop": 1229664.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Nei Mongol"
	},
	{
		"city": "Harbin",
		"lat": 45.74998395,
		"lng": 126.6499849,
		"pop": 3425441.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Heilongjiang"
	},
	{
		"city": "Urumqi",
		"lat": 43.80501223,
		"lng": 87.57500565,
		"pop": 1829612.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Xinjiang Uygur"
	},
	{
		"city": "Chengdu",
		"lat": 30.67000002,
		"lng": 104.0700195,
		"pop": 4036718.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Sichuan"
	},
	{
		"city": "Beijing",
		"lat": 39.92889223,
		"lng": 116.3882857,
		"pop": 9293300.5,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Beijing"
	},
	{
		"city": "Shanghai",
		"lat": 31.21645245,
		"lng": 121.4365047,
		"pop": 14797756,
		"iso2": "CN",
		"iso3": "CHN",
		"prov": "Shanghai"
	},
	{
		"city": "Soledad",
		"lat": 10.92001691,
		"lng": -74.76999455,
		"pop": 520704,
		"iso2": "CO",
		"iso3": "COL",
		"prov": "Atlántico"
	},
	{
		"city": "Armenia",
		"lat": 4.534282653,
		"lng": -75.68112757,
		"pop": 314797.5,
		"iso2": "CO",
		"iso3": "COL",
		"prov": "Quindío"
	},
	{
		"city": "Pereira",
		"lat": 4.81038983,
		"lng": -75.67999068,
		"pop": 504434,
		"iso2": "CO",
		"iso3": "COL",
		"prov": "Risaralda"
	},
	{
		"city": "Neiva",
		"lat": 2.931047179,
		"lng": -75.33024459,
		"pop": 318566,
		"iso2": "CO",
		"iso3": "COL",
		"prov": "Huila"
	},
	{
		"city": "Bello",
		"lat": 6.329986998,
		"lng": -75.5699974,
		"pop": 456304.5,
		"iso2": "CO",
		"iso3": "COL",
		"prov": "Antioquia"
	},
	{
		"city": "Bucaramanga",
		"lat": 7.1300932,
		"lng": -73.12588302,
		"pop": 790410,
		"iso2": "CO",
		"iso3": "COL",
		"prov": "Santander"
	},
	{
		"city": "Ibague",
		"lat": 4.438913797,
		"lng": -75.2322144,
		"pop": 415156,
		"iso2": "CO",
		"iso3": "COL",
		"prov": "Tolima"
	},
	{
		"city": "Santa Marta",
		"lat": 11.24720624,
		"lng": -74.20165715,
		"pop": 417211,
		"iso2": "CO",
		"iso3": "COL",
		"prov": "Magdalena"
	},
	{
		"city": "Cucuta",
		"lat": 7.920019144,
		"lng": -72.51997685,
		"pop": 721772,
		"iso2": "CO",
		"iso3": "COL",
		"prov": "Norte de Santander"
	},
	{
		"city": "Villavicencio",
		"lat": 4.153323994,
		"lng": -73.63499923,
		"pop": 348240,
		"iso2": "CO",
		"iso3": "COL",
		"prov": "Meta"
	},
	{
		"city": "Manizales",
		"lat": 5.059986998,
		"lng": -75.52000045,
		"pop": 366831,
		"iso2": "CO",
		"iso3": "COL",
		"prov": "Caldas"
	},
	{
		"city": "Pasto",
		"lat": 1.21360679,
		"lng": -77.28110742,
		"pop": 371138.5,
		"iso2": "CO",
		"iso3": "COL",
		"prov": "Nariño"
	},
	{
		"city": "Barranquilla",
		"lat": 10.95998863,
		"lng": -74.79996688,
		"pop": 1521245.5,
		"iso2": "CO",
		"iso3": "COL",
		"prov": "Atlántico"
	},
	{
		"city": "Cartagena",
		"lat": 10.39973859,
		"lng": -75.51439356,
		"pop": 887000,
		"iso2": "CO",
		"iso3": "COL",
		"prov": "Bolívar"
	},
	{
		"city": "Medellin",
		"lat": 6.275003274,
		"lng": -75.57501001,
		"pop": 2648489.5,
		"iso2": "CO",
		"iso3": "COL",
		"prov": "Antioquia"
	},
	{
		"city": "Cali",
		"lat": 3.399959126,
		"lng": -76.49996647,
		"pop": 2216418,
		"iso2": "CO",
		"iso3": "COL",
		"prov": "Valle del Cauca"
	},
	{
		"city": "Bogota",
		"lat": 4.596423563,
		"lng": -74.08334396,
		"pop": 7052830.5,
		"iso2": "CO",
		"iso3": "COL",
		"prov": "Bogota"
	},
	{
		"city": "Pointe-Noire",
		"lat": -4.770007305,
		"lng": 11.88003943,
		"pop": 602440.5,
		"iso2": "CG",
		"iso3": "COG",
		"prov": "Kouilou"
	},
	{
		"city": "Brazzaville",
		"lat": -4.259185772,
		"lng": 15.28468949,
		"pop": 1259445,
		"iso2": "CG",
		"iso3": "COG",
		"prov": "Pool"
	},
	{
		"city": "Bukavu",
		"lat": -2.509990215,
		"lng": 28.8400378,
		"pop": 331084,
		"iso2": "CD",
		"iso3": "COD",
		"prov": "Sud-Kivu"
	},
	{
		"city": "Likasi",
		"lat": -10.9700423,
		"lng": 26.7800085,
		"pop": 428411,
		"iso2": "CD",
		"iso3": "COD",
		"prov": "Katanga"
	},
	{
		"city": "Kisangani",
		"lat": 0.520005716,
		"lng": 25.22000036,
		"pop": 558814,
		"iso2": "CD",
		"iso3": "COD",
		"prov": "Orientale"
	},
	{
		"city": "Kananga",
		"lat": -5.890042299,
		"lng": 22.40001745,
		"pop": 614273,
		"iso2": "CD",
		"iso3": "COD",
		"prov": "Kasaï-Occidental"
	},
	{
		"city": "Mbuji-Mayi",
		"lat": -6.150026429,
		"lng": 23.59999589,
		"pop": 1084880.5,
		"iso2": "CD",
		"iso3": "COD",
		"prov": "Kasaï-Oriental"
	},
	{
		"city": "Kikwit",
		"lat": -5.030043112,
		"lng": 18.85000159,
		"pop": 465973,
		"iso2": "CD",
		"iso3": "COD",
		"prov": "Bandundu"
	},
	{
		"city": "Kolwezi",
		"lat": -10.71672443,
		"lng": 25.47243974,
		"pop": 418000,
		"iso2": "CD",
		"iso3": "COD",
		"prov": "Katanga"
	},
	{
		"city": "Lubumbashi",
		"lat": -11.6800248,
		"lng": 27.48001745,
		"pop": 1114317,
		"iso2": "CD",
		"iso3": "COD",
		"prov": "Katanga"
	},
	{
		"city": "Kinshasa",
		"lat": -4.329724102,
		"lng": 15.31497188,
		"pop": 6704351.5,
		"iso2": "CD",
		"iso3": "COD",
		"prov": "Kinshasa City"
	},
	{
		"city": "San Jose",
		"lat": 9.93501243,
		"lng": -84.08405135,
		"pop": 642862,
		"iso2": "CR",
		"iso3": "CRI",
		"prov": "San José"
	},
	{
		"city": "Rijeka",
		"lat": 45.32998374,
		"lng": 14.45001176,
		"pop": 156082,
		"iso2": "HR",
		"iso3": "HRV",
		"prov": "Primorsko-Goranska"
	},
	{
		"city": "Split",
		"lat": 43.52040428,
		"lng": 16.46999182,
		"pop": 195527.5,
		"iso2": "HR",
		"iso3": "HRV",
		"prov": "Splitsko-Dalmatinska"
	},
	{
		"city": "Zagreb",
		"lat": 45.80000673,
		"lng": 15.99999467,
		"pop": 710746,
		"iso2": "HR",
		"iso3": "HRV",
		"prov": "Grad Zagreb"
	},
	{
		"city": "Camaguey",
		"lat": 21.38082542,
		"lng": -77.91693425,
		"pop": 321583.5,
		"iso2": "CU",
		"iso3": "CUB",
		"prov": "Camagüey"
	},
	{
		"city": "Holguin",
		"lat": 20.88723798,
		"lng": -76.26305587,
		"pop": 309639.5,
		"iso2": "CU",
		"iso3": "CUB",
		"prov": "Holguín"
	},
	{
		"city": "Santiago de Cuba",
		"lat": 20.0250167,
		"lng": -75.82132573,
		"pop": 500964,
		"iso2": "CU",
		"iso3": "CUB",
		"prov": "Santiago de Cuba"
	},
	{
		"city": "Havana",
		"lat": 23.13195884,
		"lng": -82.36418217,
		"pop": 2082458.5,
		"iso2": "CU",
		"iso3": "CUB",
		"prov": "Ciudad de la Habana"
	},
	{
		"city": "Pizen",
		"lat": 49.74043805,
		"lng": 13.36000077,
		"pop": 161043,
		"iso2": "CZ",
		"iso3": "CZE",
		"prov": "Karlovarský"
	},
	{
		"city": "Zlin",
		"lat": 49.2304175,
		"lng": 17.65002315,
		"pop": 101893.5,
		"iso2": "CZ",
		"iso3": "CZE",
		"prov": "Kraj Vysocina"
	},
	{
		"city": "Brno",
		"lat": 49.20039349,
		"lng": 16.60998328,
		"pop": 378918,
		"iso2": "CZ",
		"iso3": "CZE",
		"prov": "Kraj Vysocina"
	},
	{
		"city": "Ostrava",
		"lat": 49.83035504,
		"lng": 18.24998653,
		"pop": 396025.5,
		"iso2": "CZ",
		"iso3": "CZE",
		"prov": "Moravskoslezský"
	},
	{
		"city": "Prague",
		"lat": 50.08333701,
		"lng": 14.46597978,
		"pop": 582043.5,
		"iso2": "CZ",
		"iso3": "CZE",
		"prov": "Prague"
	},
	{
		"city": "Odense",
		"lat": 55.40037681,
		"lng": 10.38333492,
		"pop": 152076.5,
		"iso2": "DK",
		"iso3": "DNK",
		"prov": "Syddanmark"
	},
	{
		"city": "Aalborg",
		"lat": 57.03371381,
		"lng": 9.916593382,
		"pop": 111917.5,
		"iso2": "DK",
		"iso3": "DNK",
		"prov": "Nordjylland"
	},
	{
		"city": "Aarhus",
		"lat": 56.157204,
		"lng": 10.21068396,
		"pop": 232325.5,
		"iso2": "DK",
		"iso3": "DNK",
		"prov": "Midtjylland"
	},
	{
		"city": "Kobenhavn",
		"lat": 55.67856419,
		"lng": 12.56348575,
		"pop": 1085000,
		"iso2": "DK",
		"iso3": "DNK",
		"prov": "Hovedstaden"
	},
	{
		"city": "Djibouti",
		"lat": 11.59501446,
		"lng": 43.14800167,
		"pop": 763506.5,
		"iso2": "DJ",
		"iso3": "DJI",
		"prov": "Djibouti"
	},
	{
		"city": "Santiago",
		"lat": 19.50000999,
		"lng": -70.67001225,
		"pop": 1471007.5,
		"iso2": "DO",
		"iso3": "DOM",
		"prov": "Santiago"
	},
	{
		"city": "Santo Domingo",
		"lat": 18.47007285,
		"lng": -69.90008508,
		"pop": 1078436.5,
		"iso2": "DO",
		"iso3": "DOM",
		"prov": "Distrito Nacional"
	},
	{
		"city": "Quito",
		"lat": -0.214988181,
		"lng": -78.50005111,
		"pop": 1550407,
		"iso2": "EC",
		"iso3": "ECU",
		"prov": "Pichincha"
	},
	{
		"city": "Guayaquil",
		"lat": -2.220033754,
		"lng": -79.92004195,
		"pop": 2233014.5,
		"iso2": "EC",
		"iso3": "ECU",
		"prov": "Guayas"
	},
	{
		"city": "Tanta",
		"lat": 30.79043194,
		"lng": 31.00000932,
		"pop": 404901,
		"iso2": "EG",
		"iso3": "EGY",
		"prov": "Al Gharbiyah"
	},
	{
		"city": "Ismailia",
		"lat": 30.5903408,
		"lng": 32.25998409,
		"pop": 470474,
		"iso2": "EG",
		"iso3": "EGY",
		"prov": "Al Isma`iliyah"
	},
	{
		"city": "El Mansura",
		"lat": 31.05044191,
		"lng": 31.3800378,
		"pop": 540247,
		"iso2": "EG",
		"iso3": "EGY",
		"prov": "Ad Daqahliyah"
	},
	{
		"city": "Damanhur",
		"lat": 31.05044191,
		"lng": 30.47001583,
		"pop": 371350,
		"iso2": "EG",
		"iso3": "EGY",
		"prov": "Al Buhayrah"
	},
	{
		"city": "Beni Suef",
		"lat": 29.08038129,
		"lng": 31.09002966,
		"pop": 339537,
		"iso2": "EG",
		"iso3": "EGY",
		"prov": "Bani Suwayf"
	},
	{
		"city": "Sohag",
		"lat": 26.55040651,
		"lng": 31.70001827,
		"pop": 404709.5,
		"iso2": "EG",
		"iso3": "EGY",
		"prov": "Suhaj"
	},
	{
		"city": "El Giza",
		"lat": 30.00998863,
		"lng": 31.19002356,
		"pop": 2681863,
		"iso2": "EG",
		"iso3": "EGY",
		"prov": "Al Jizah"
	},
	{
		"city": "El Minya",
		"lat": 28.09000246,
		"lng": 30.74999874,
		"pop": 363575,
		"iso2": "EG",
		"iso3": "EGY",
		"prov": "Al Minya"
	},
	{
		"city": "Suez",
		"lat": 30.00497601,
		"lng": 32.54994055,
		"pop": 498230,
		"iso2": "EG",
		"iso3": "EGY",
		"prov": "As Suways"
	},
	{
		"city": "Bur Said",
		"lat": 31.25998985,
		"lng": 32.2900081,
		"pop": 561932,
		"iso2": "EG",
		"iso3": "EGY",
		"prov": "Bur Sa`id"
	},
	{
		"city": "El Faiyum",
		"lat": 29.31003135,
		"lng": 30.83996741,
		"pop": 311582.5,
		"iso2": "EG",
		"iso3": "EGY",
		"prov": "Al Fayyum"
	},
	{
		"city": "Asyut",
		"lat": 27.18997988,
		"lng": 31.17994665,
		"pop": 420585,
		"iso2": "EG",
		"iso3": "EGY",
		"prov": "Asyut"
	},
	{
		"city": "Luxor",
		"lat": 25.70001914,
		"lng": 32.6500378,
		"pop": 548572,
		"iso2": "EG",
		"iso3": "EGY",
		"prov": "Qina"
	},
	{
		"city": "Alexandria",
		"lat": 31.20001935,
		"lng": 29.94999589,
		"pop": 3988258,
		"iso2": "EG",
		"iso3": "EGY",
		"prov": "Al Iskandariyah"
	},
	{
		"city": "Cairo",
		"lat": 30.04996035,
		"lng": 31.24996822,
		"pop": 9813807,
		"iso2": "EG",
		"iso3": "EGY",
		"prov": "Al Qahirah"
	},
	{
		"city": "San Salvador",
		"lat": 13.71000165,
		"lng": -89.20304122,
		"pop": 717903.5,
		"iso2": "SV",
		"iso3": "SLV",
		"prov": "San Salvador"
	},
	{
		"city": "Asmara",
		"lat": 15.33333925,
		"lng": 38.93332353,
		"pop": 592366,
		"iso2": "ER",
		"iso3": "ERI",
		"prov": "Anseba"
	},
	{
		"city": "Tallinn",
		"lat": 59.43387738,
		"lng": 24.72804073,
		"pop": 367025.5,
		"iso2": "EE",
		"iso3": "EST",
		"prov": "Harju"
	},
	{
		"city": "Nazret",
		"lat": 8.549980691,
		"lng": 39.26999548,
		"pop": 345443.5,
		"iso2": "ET",
		"iso3": "ETH",
		"prov": "Addis Ababa"
	},
	{
		"city": "Addis Ababa",
		"lat": 9.033310363,
		"lng": 38.70000443,
		"pop": 2928864.5,
		"iso2": "ET",
		"iso3": "ETH",
		"prov": "Addis Ababa"
	},
	{
		"city": "Turku",
		"lat": 60.4538668,
		"lng": 22.25496171,
		"pop": 175442.5,
		"iso2": "FI",
		"iso3": "FIN",
		"prov": "Finland Proper"
	},
	{
		"city": "Oulu",
		"lat": 64.99999758,
		"lng": 25.47001094,
		"pop": 132685,
		"iso2": "FI",
		"iso3": "FIN",
		"prov": "Northern Ostrobothnia"
	},
	{
		"city": "Tampere",
		"lat": 61.5000045,
		"lng": 23.75001257,
		"pop": 230983,
		"iso2": "FI",
		"iso3": "FIN",
		"prov": "Pirkanmaa"
	},
	{
		"city": "Helsinki",
		"lat": 60.17556337,
		"lng": 24.93412634,
		"pop": 836728.5,
		"iso2": "FI",
		"iso3": "FIN",
		"prov": "Southern Finland"
	},
	{
		"city": "Angers",
		"lat": 47.48000755,
		"lng": -0.530029949,
		"pop": 178329.5,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Pays de la Loire"
	},
	{
		"city": "Aix-en-Provence",
		"lat": 43.51999086,
		"lng": 5.449992634,
		"pop": 145309,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Provence-Alpes-Côte-d'Azur"
	},
	{
		"city": "Perpignan",
		"lat": 42.69998924,
		"lng": 2.899967406,
		"pop": 128663,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Languedoc-Roussillon"
	},
	{
		"city": "Clermont-Ferrand",
		"lat": 45.77998212,
		"lng": 3.080008096,
		"pop": 185865.5,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Auvergne"
	},
	{
		"city": "Melun",
		"lat": 48.53330243,
		"lng": 2.666648314,
		"pop": 144192.5,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Île-de-France"
	},
	{
		"city": "Besancon",
		"lat": 47.22999697,
		"lng": 6.03000891,
		"pop": 124193,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Franche-Comté"
	},
	{
		"city": "Saint-Etienne",
		"lat": 45.43039105,
		"lng": 4.380032103,
		"pop": 220982,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Rhône-Alpes"
	},
	{
		"city": "Grenoble",
		"lat": 45.18038047,
		"lng": 5.720001992,
		"pop": 273563,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Rhône-Alpes"
	},
	{
		"city": "Caen",
		"lat": 49.18375368,
		"lng": -0.349989259,
		"pop": 150361.5,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Basse-Normandie"
	},
	{
		"city": "Brest",
		"lat": 48.39044293,
		"lng": -4.49500757,
		"pop": 142914,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Bretagne"
	},
	{
		"city": "Le Mans",
		"lat": 48.00041506,
		"lng": 0.099983275,
		"pop": 143392.5,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Pays de la Loire"
	},
	{
		"city": "Nantes",
		"lat": 47.21038576,
		"lng": -1.590016929,
		"pop": 357903,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Pays de la Loire"
	},
	{
		"city": "Toulon",
		"lat": 43.13418645,
		"lng": 5.918821566,
		"pop": 263197,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Provence-Alpes-Côte-d'Azur"
	},
	{
		"city": "Montpellier",
		"lat": 43.61039878,
		"lng": 3.869985716,
		"pop": 287753,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Languedoc-Roussillon"
	},
	{
		"city": "Nimes",
		"lat": 43.83038535,
		"lng": 4.350008096,
		"pop": 158891.5,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Languedoc-Roussillon"
	},
	{
		"city": "Dijon",
		"lat": 47.33040428,
		"lng": 5.030018268,
		"pop": 159864,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Bourgogne"
	},
	{
		"city": "Tours",
		"lat": 47.38037539,
		"lng": 0.699946654,
		"pop": 188858.5,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Centre"
	},
	{
		"city": "Orleans",
		"lat": 47.90042116,
		"lng": 1.900028441,
		"pop": 170725,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Centre"
	},
	{
		"city": "Rouen",
		"lat": 49.43040529,
		"lng": 1.079975137,
		"pop": 321417.5,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Haute-Normandie"
	},
	{
		"city": "Reims",
		"lat": 49.25039044,
		"lng": 4.029975951,
		"pop": 177939,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Champagne-Ardenne"
	},
	{
		"city": "Amiens",
		"lat": 49.90037661,
		"lng": 2.300004027,
		"pop": 118908.5,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Picardie"
	},
	{
		"city": "Mulhouse",
		"lat": 47.75040448,
		"lng": 7.34998002,
		"pop": 163442,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Alsace"
	},
	{
		"city": "Nancy",
		"lat": 48.68368085,
		"lng": 6.200024372,
		"pop": 187155,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Lorraine"
	},
	{
		"city": "Metz",
		"lat": 49.1203467,
		"lng": 6.180025593,
		"pop": 266550,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Lorraine"
	},
	{
		"city": "Rennes",
		"lat": 48.10002138,
		"lng": -1.670012046,
		"pop": 204329.5,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Bretagne"
	},
	{
		"city": "Nice",
		"lat": 43.71501772,
		"lng": 7.265023965,
		"pop": 632810,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Provence-Alpes-Côte-d'Azur"
	},
	{
		"city": "Toulouse",
		"lat": 43.61995892,
		"lng": 1.449926716,
		"pop": 640027.5,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Midi-Pyrénées"
	},
	{
		"city": "Limoges",
		"lat": 45.82997906,
		"lng": 1.249990599,
		"pop": 146687.5,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Limousin"
	},
	{
		"city": "Lille",
		"lat": 50.64996909,
		"lng": 3.080008096,
		"pop": 636164,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Nord-Pas-de-Calais"
	},
	{
		"city": "Strasbourg",
		"lat": 48.57996625,
		"lng": 7.750007282,
		"pop": 357408.5,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Alsace"
	},
	{
		"city": "Bordeaux",
		"lat": 44.85001304,
		"lng": -0.595013063,
		"pop": 517422,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Aquitaine"
	},
	{
		"city": "Marseille",
		"lat": 43.28997906,
		"lng": 5.37501013,
		"pop": 1097405.5,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Provence-Alpes-Côte-d'Azur"
	},
	{
		"city": "Le Havre",
		"lat": 49.50497438,
		"lng": 0.104970051,
		"pop": 214048,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Haute-Normandie"
	},
	{
		"city": "Lyon",
		"lat": 45.77000856,
		"lng": 4.830030475,
		"pop": 947658.5,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Rhône-Alpes"
	},
	{
		"city": "Paris",
		"lat": 48.86669293,
		"lng": 2.333335326,
		"pop": 4957588.5,
		"iso2": "FR",
		"iso3": "FRA",
		"prov": "Île-de-France"
	},
	{
		"city": "Libreville",
		"lat": 0.38538861,
		"lng": 9.457965046,
		"pop": 530755.5,
		"iso2": "GA",
		"iso3": "GAB",
		"prov": "Estuaire"
	},
	{
		"city": "Tbilisi",
		"lat": 41.72500999,
		"lng": 44.79079545,
		"pop": 1052628.5,
		"iso2": "GE",
		"iso3": "GEO",
		"prov": "Tbilisi"
	},
	{
		"city": "Mainz",
		"lat": 49.98247246,
		"lng": 8.273219156,
		"pop": 184997,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Rheinland-Pfalz"
	},
	{
		"city": "Bielefeld",
		"lat": 52.02998822,
		"lng": 8.530011351,
		"pop": 311739.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Nordrhein-Westfalen"
	},
	{
		"city": "Dortmund",
		"lat": 51.52996706,
		"lng": 7.450025593,
		"pop": 588462,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Nordrhein-Westfalen"
	},
	{
		"city": "Duisburg",
		"lat": 51.42997316,
		"lng": 6.750016641,
		"pop": 882381,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Nordrhein-Westfalen"
	},
	{
		"city": "Wuppertal",
		"lat": 51.25000999,
		"lng": 7.169991006,
		"pop": 562997.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Nordrhein-Westfalen"
	},
	{
		"city": "Essen",
		"lat": 51.44999778,
		"lng": 7.016615355,
		"pop": 1157801.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Nordrhein-Westfalen"
	},
	{
		"city": "Karlsruhe",
		"lat": 48.99999229,
		"lng": 8.399993448,
		"pop": 330643,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Baden-Württemberg"
	},
	{
		"city": "Heidelberg",
		"lat": 49.41999249,
		"lng": 8.699975137,
		"pop": 284967.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Baden-Württemberg"
	},
	{
		"city": "Kassel",
		"lat": 51.30000694,
		"lng": 9.500029662,
		"pop": 242212.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Hessen"
	},
	{
		"city": "Oldenburg",
		"lat": 53.1299986,
		"lng": 8.220004434,
		"pop": 163338,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Niedersachsen"
	},
	{
		"city": "Braunschweig",
		"lat": 52.24997479,
		"lng": 10.5000203,
		"pop": 239884.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Niedersachsen"
	},
	{
		"city": "Erfurt",
		"lat": 50.97005292,
		"lng": 11.02996212,
		"pop": 189365,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Thüringen"
	},
	{
		"city": "Augsburg",
		"lat": 48.35000612,
		"lng": 10.89999589,
		"pop": 309092.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Bayern"
	},
	{
		"city": "Furth",
		"lat": 49.47001528,
		"lng": 10.99998979,
		"pop": 174934.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Bayern"
	},
	{
		"city": "Chemnitz",
		"lat": 50.82998395,
		"lng": 12.91997595,
		"pop": 274931.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Sachsen"
	},
	{
		"city": "Bonn",
		"lat": 50.72045575,
		"lng": 7.080022337,
		"pop": 496834,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Nordrhein-Westfalen"
	},
	{
		"city": "Munster",
		"lat": 51.97040529,
		"lng": 7.620041055,
		"pop": 253612.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Nordrhein-Westfalen"
	},
	{
		"city": "Dusseldorf",
		"lat": 51.22037355,
		"lng": 6.779988972,
		"pop": 906196.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Nordrhein-Westfalen"
	},
	{
		"city": "Ulm",
		"lat": 48.40039064,
		"lng": 9.999999144,
		"pop": 146703,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Baden-Württemberg"
	},
	{
		"city": "Mannheim",
		"lat": 49.50037518,
		"lng": 8.470015013,
		"pop": 1337587,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Baden-Württemberg"
	},
	{
		"city": "Freiburg",
		"lat": 48.00041506,
		"lng": 7.869948281,
		"pop": 235427.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Baden-Württemberg"
	},
	{
		"city": "Wiesbaden",
		"lat": 50.08039146,
		"lng": 8.250028441,
		"pop": 444779,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Hessen"
	},
	{
		"city": "Bremerhaven",
		"lat": 53.55043805,
		"lng": 8.579982461,
		"pop": 127598.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Bremen"
	},
	{
		"city": "Osnabruck",
		"lat": 52.28043805,
		"lng": 8.049988972,
		"pop": 198865,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Niedersachsen"
	},
	{
		"city": "Hannover",
		"lat": 52.36697023,
		"lng": 9.716657266,
		"pop": 618815,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Niedersachsen"
	},
	{
		"city": "Gottingen",
		"lat": 51.52043276,
		"lng": 9.920004027,
		"pop": 130784,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Niedersachsen"
	},
	{
		"city": "Gera",
		"lat": 50.87036908,
		"lng": 12.07000199,
		"pop": 103857,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Thüringen"
	},
	{
		"city": "Lubeck",
		"lat": 53.87039268,
		"lng": 10.66998409,
		"pop": 223798.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Schleswig-Holstein"
	},
	{
		"city": "Kiel",
		"lat": 54.33039044,
		"lng": 10.13001705,
		"pop": 251092.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Schleswig-Holstein"
	},
	{
		"city": "Koblenz",
		"lat": 50.35047833,
		"lng": 7.599990599,
		"pop": 209976,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Rheinland-Pfalz"
	},
	{
		"city": "Saarbrucken",
		"lat": 49.25039044,
		"lng": 6.970003213,
		"pop": 472871,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Saarland"
	},
	{
		"city": "Regensburg",
		"lat": 49.02040448,
		"lng": 12.12002478,
		"pop": 146755,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Bayern"
	},
	{
		"city": "Wurzburg",
		"lat": 49.80043439,
		"lng": 9.950028034,
		"pop": 151146,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Bayern"
	},
	{
		"city": "Ingolstadt",
		"lat": 48.77041974,
		"lng": 11.44998816,
		"pop": 141991.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Bayern"
	},
	{
		"city": "Potsdam",
		"lat": 52.40040489,
		"lng": 13.06999263,
		"pop": 181693.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Brandenburg"
	},
	{
		"city": "Magdeburg",
		"lat": 52.13042137,
		"lng": 11.62000362,
		"pop": 227378.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Sachsen-Anhalt"
	},
	{
		"city": "Leipzig",
		"lat": 51.33540529,
		"lng": 12.40998124,
		"pop": 523750,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Sachsen"
	},
	{
		"city": "Rostock",
		"lat": 54.07038047,
		"lng": 12.14999711,
		"pop": 200686.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Mecklenburg-Vorpommern"
	},
	{
		"city": "Stuttgart",
		"lat": 48.77997988,
		"lng": 9.199996296,
		"pop": 1775644,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Baden-Württemberg"
	},
	{
		"city": "Bremen",
		"lat": 53.08000165,
		"lng": 8.80002071,
		"pop": 635705,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Bremen"
	},
	{
		"city": "Nurnberg",
		"lat": 49.44999066,
		"lng": 11.0799849,
		"pop": 618270.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Bayern"
	},
	{
		"city": "Cologne",
		"lat": 50.93000368,
		"lng": 6.950004434,
		"pop": 983697.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Nordrhein-Westfalen"
	},
	{
		"city": "Dresden",
		"lat": 51.04997052,
		"lng": 13.75000281,
		"pop": 552184.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Sachsen"
	},
	{
		"city": "Frankfurt",
		"lat": 50.09997683,
		"lng": 8.67501542,
		"pop": 1787332,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Hessen"
	},
	{
		"city": "Hamburg",
		"lat": 53.55002464,
		"lng": 9.999999144,
		"pop": 1748058.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Hamburg"
	},
	{
		"city": "Munich",
		"lat": 48.12994204,
		"lng": 11.57499345,
		"pop": 1267695.5,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Bayern"
	},
	{
		"city": "Berlin",
		"lat": 52.52181866,
		"lng": 13.40154862,
		"pop": 3250007,
		"iso2": "DE",
		"iso3": "DEU",
		"prov": "Berlin"
	},
	{
		"city": "Tamale",
		"lat": 9.400419738,
		"lng": -0.83998519,
		"pop": 342871,
		"iso2": "GH",
		"iso3": "GHA",
		"prov": "Northern"
	},
	{
		"city": "Kumasi",
		"lat": 6.689990864,
		"lng": -1.630014487,
		"pop": 1468575.5,
		"iso2": "GH",
		"iso3": "GHA",
		"prov": "Ashanti"
	},
	{
		"city": "Accra",
		"lat": 5.550034606,
		"lng": -0.21671574,
		"pop": 2042132,
		"iso2": "GH",
		"iso3": "GHA",
		"prov": "Greater Accra"
	},
	{
		"city": "Gibraltar",
		"lat": 36.13243495,
		"lng": -5.37807483,
		"pop": 106813.5,
		"iso2": "GI",
		"iso3": "GIB",
		"prov": "Gibraltar"
	},
	{
		"city": "Piraievs",
		"lat": 37.95002077,
		"lng": 23.69998979,
		"pop": 320881,
		"iso2": "GR",
		"iso3": "GRC",
		"prov": "Attiki"
	},
	{
		"city": "Larissa",
		"lat": 39.63040916,
		"lng": 22.42001623,
		"pop": 120122.5,
		"iso2": "GR",
		"iso3": "GRC",
		"prov": "Thessalia"
	},
	{
		"city": "Patra",
		"lat": 38.23000368,
		"lng": 21.72998083,
		"pop": 159579.5,
		"iso2": "GR",
		"iso3": "GRC",
		"prov": "Dytiki Ellada"
	},
	{
		"city": "Iraklio",
		"lat": 35.32501304,
		"lng": 25.13049678,
		"pop": 134404,
		"iso2": "GR",
		"iso3": "GRC",
		"prov": "Kriti"
	},
	{
		"city": "Thessaloniki",
		"lat": 40.69610638,
		"lng": 22.88500077,
		"pop": 591145,
		"iso2": "GR",
		"iso3": "GRC",
		"prov": "Kentriki Makedonia"
	},
	{
		"city": "Athens",
		"lat": 37.98332623,
		"lng": 23.73332108,
		"pop": 1985568.5,
		"iso2": "GR",
		"iso3": "GRC",
		"prov": "Attiki"
	},
	{
		"city": "Quetzaltenango",
		"lat": 14.82995913,
		"lng": -91.52000574,
		"pop": 399983,
		"iso2": "GT",
		"iso3": "GTM",
		"prov": "Quezaltenango"
	},
	{
		"city": "Guatemala",
		"lat": 14.62113466,
		"lng": -90.52696558,
		"pop": 1009469,
		"iso2": "GT",
		"iso3": "GTM",
		"prov": "Guatemala"
	},
	{
		"city": "Conakry",
		"lat": 9.531522846,
		"lng": -13.68023503,
		"pop": 1494000,
		"iso2": "GN",
		"iso3": "GIN",
		"prov": "Conakry"
	},
	{
		"city": "Bissau",
		"lat": 11.86502382,
		"lng": -15.59836084,
		"pop": 395683.5,
		"iso2": "GW",
		"iso3": "GNB",
		"prov": "Bissau"
	},
	{
		"city": "Port-au-Prince",
		"lat": 18.5410246,
		"lng": -72.33603459,
		"pop": 1616371,
		"iso2": "HT",
		"iso3": "HTI",
		"prov": "Ouest"
	},
	{
		"city": "San Pedro Sula",
		"lat": 15.50002159,
		"lng": -88.02998621,
		"pop": 584778.5,
		"iso2": "HN",
		"iso3": "HND",
		"prov": "Cortés"
	},
	{
		"city": "Tegucigalpa",
		"lat": 14.1020449,
		"lng": -87.21752934,
		"pop": 898424,
		"iso2": "HN",
		"iso3": "HND",
		"prov": "Francisco Morazán"
	},
	{
		"city": "Hong Kong",
		"lat": 22.3049809,
		"lng": 114.1850093,
		"pop": 5878789.5,
		"iso2": "HK",
		"iso3": "HKG",
		"prov": ""
	},
	{
		"city": "Kecskemet",
		"lat": 46.90004295,
		"lng": 19.70002722,
		"pop": 111871,
		"iso2": "HU",
		"iso3": "HUN",
		"prov": "Bács-Kiskun"
	},
	{
		"city": "Szekesfehervar",
		"lat": 47.19467613,
		"lng": 18.40806474,
		"pop": 122959.5,
		"iso2": "HU",
		"iso3": "HUN",
		"prov": "Fejér"
	},
	{
		"city": "Nyiregyhaza",
		"lat": 47.96532676,
		"lng": 21.71871537,
		"pop": 146589,
		"iso2": "HU",
		"iso3": "HUN",
		"prov": "Szabolcs-Szatmár-Bereg"
	},
	{
		"city": "Pecs",
		"lat": 46.08042889,
		"lng": 18.2200142,
		"pop": 171455.5,
		"iso2": "HU",
		"iso3": "HUN",
		"prov": "Baranya"
	},
	{
		"city": "Gyor",
		"lat": 47.70035585,
		"lng": 17.63002437,
		"pop": 132173,
		"iso2": "HU",
		"iso3": "HUN",
		"prov": "Gyor-Moson-Sopron"
	},
	{
		"city": "Miskolc",
		"lat": 48.10040896,
		"lng": 20.78001298,
		"pop": 210197,
		"iso2": "HU",
		"iso3": "HUN",
		"prov": "Borsod-Abaúj-Zemplén"
	},
	{
		"city": "Szeged",
		"lat": 46.25039268,
		"lng": 20.15002559,
		"pop": 176324,
		"iso2": "HU",
		"iso3": "HUN",
		"prov": "Csongrád"
	},
	{
		"city": "Debrecen",
		"lat": 47.53046958,
		"lng": 21.63003861,
		"pop": 217705,
		"iso2": "HU",
		"iso3": "HUN",
		"prov": "Hajdú-Bihar"
	},
	{
		"city": "Budapest",
		"lat": 47.50000633,
		"lng": 19.08332068,
		"pop": 1679000,
		"iso2": "HU",
		"iso3": "HUN",
		"prov": "Budapest"
	},
	{
		"city": "Rohtak",
		"lat": 28.9000047,
		"lng": 76.58001786,
		"pop": 317245,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Haryana"
	},
	{
		"city": "Hisar",
		"lat": 29.16998822,
		"lng": 75.72503129,
		"pop": 423039,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Haryana"
	},
	{
		"city": "Kalyan",
		"lat": 19.25023195,
		"lng": 73.16017493,
		"pop": 1576614,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Maharashtra"
	},
	{
		"city": "Ajmer",
		"lat": 26.44999921,
		"lng": 74.63998124,
		"pop": 553948,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Rajasthan"
	},
	{
		"city": "Firozabad",
		"lat": 27.14998232,
		"lng": 78.39494584,
		"pop": 306409,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Uttar Pradesh"
	},
	{
		"city": "Mathura",
		"lat": 27.4999868,
		"lng": 77.67002885,
		"pop": 330511,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Uttar Pradesh"
	},
	{
		"city": "Muzaffarnagar",
		"lat": 29.48500775,
		"lng": 77.69504024,
		"pop": 349706,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Uttar Pradesh"
	},
	{
		"city": "Rajahmundry",
		"lat": 17.03034161,
		"lng": 81.78998409,
		"pop": 304804,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Andhra Pradesh"
	},
	{
		"city": "Nizamabad",
		"lat": 18.67039654,
		"lng": 78.10002844,
		"pop": 346971.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Andhra Pradesh"
	},
	{
		"city": "Kollam",
		"lat": 8.900372741,
		"lng": 76.56999263,
		"pop": 394163,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Kerala"
	},
	{
		"city": "Raurkela",
		"lat": 22.2304118,
		"lng": 84.82995357,
		"pop": 554730,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Orissa"
	},
	{
		"city": "Shimoga",
		"lat": 13.93037579,
		"lng": 75.56002844,
		"pop": 486802.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Karnataka"
	},
	{
		"city": "Sangli",
		"lat": 16.86040367,
		"lng": 74.57502397,
		"pop": 601214,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Maharashtra"
	},
	{
		"city": "Parbhani",
		"lat": 19.27038576,
		"lng": 76.76000688,
		"pop": 333977.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Maharashtra"
	},
	{
		"city": "Malegaon",
		"lat": 20.5603587,
		"lng": 74.52500118,
		"pop": 563103,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Maharashtra"
	},
	{
		"city": "Shillong",
		"lat": 25.57049217,
		"lng": 91.8800142,
		"pop": 364926,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Meghalaya"
	},
	{
		"city": "Patiala",
		"lat": 30.32040895,
		"lng": 76.38499101,
		"pop": 329224,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Punjab"
	},
	{
		"city": "Bhilwara",
		"lat": 25.35042808,
		"lng": 74.6350203,
		"pop": 358171,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Rajasthan"
	},
	{
		"city": "Sikar",
		"lat": 27.61039349,
		"lng": 75.1400024,
		"pop": 318789.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Rajasthan"
	},
	{
		"city": "Bikaner",
		"lat": 28.0303937,
		"lng": 73.32993201,
		"pop": 485961.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Rajasthan"
	},
	{
		"city": "Jhansi",
		"lat": 25.45295412,
		"lng": 78.55746822,
		"pop": 619710.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Uttar Pradesh"
	},
	{
		"city": "Shahjahanpur",
		"lat": 27.88037701,
		"lng": 79.90503454,
		"pop": 320434,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Uttar Pradesh"
	},
	{
		"city": "Bareilly",
		"lat": 28.34538739,
		"lng": 79.41999955,
		"pop": 781217.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Uttar Pradesh"
	},
	{
		"city": "Dehra Dun",
		"lat": 30.32040895,
		"lng": 78.05000565,
		"pop": 646321.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Uttaranchal"
	},
	{
		"city": "Haora",
		"lat": 22.58039044,
		"lng": 88.32994665,
		"pop": 2934655,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "West Bengal"
	},
	{
		"city": "Bhatpara",
		"lat": 22.85042564,
		"lng": 88.52001257,
		"pop": 483129,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "West Bengal"
	},
	{
		"city": "Siliguri",
		"lat": 26.72042198,
		"lng": 88.45500362,
		"pop": 515574,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "West Bengal"
	},
	{
		"city": "Muzaffarpur",
		"lat": 26.12043276,
		"lng": 85.37994584,
		"pop": 333200,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Bihar"
	},
	{
		"city": "Bilaspur",
		"lat": 22.09042035,
		"lng": 82.15998734,
		"pop": 436780,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Chhattisgarh"
	},
	{
		"city": "Ujjain",
		"lat": 23.19040489,
		"lng": 75.79004024,
		"pop": 485348,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Madhya Pradesh"
	},
	{
		"city": "Rajapalaiyam",
		"lat": 9.420392679,
		"lng": 77.5800085,
		"pop": 338975,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Tamil Nadu"
	},
	{
		"city": "Tirunelveli",
		"lat": 8.730408955,
		"lng": 77.68997595,
		"pop": 489022,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Tamil Nadu"
	},
	{
		"city": "Tiruppur",
		"lat": 11.08042055,
		"lng": 77.32999792,
		"pop": 547271.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Tamil Nadu"
	},
	{
		"city": "Bhavnagar",
		"lat": 21.77842389,
		"lng": 72.12995357,
		"pop": 509790,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Dadra and Nagar Haveli"
	},
	{
		"city": "Warangal",
		"lat": 18.00999758,
		"lng": 79.57998979,
		"pop": 1034690,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Andhra Pradesh"
	},
	{
		"city": "Brahmapur",
		"lat": 19.31999514,
		"lng": 84.79998124,
		"pop": 324726,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Orissa"
	},
	{
		"city": "Bhiwandi",
		"lat": 19.35001914,
		"lng": 73.12999589,
		"pop": 751017.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Maharashtra"
	},
	{
		"city": "Latur",
		"lat": 18.40041302,
		"lng": 76.56999263,
		"pop": 361680.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Maharashtra"
	},
	{
		"city": "Ahmednagar",
		"lat": 19.11042137,
		"lng": 74.75000037,
		"pop": 379450,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Maharashtra"
	},
	{
		"city": "Chandrapur",
		"lat": 19.9699813,
		"lng": 79.30000688,
		"pop": 461734.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Maharashtra"
	},
	{
		"city": "Amravati",
		"lat": 20.94997316,
		"lng": 77.77002274,
		"pop": 669144,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Maharashtra"
	},
	{
		"city": "Dhule",
		"lat": 20.89997622,
		"lng": 74.76999914,
		"pop": 423026.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Maharashtra"
	},
	{
		"city": "Udaipur",
		"lat": 24.59998293,
		"lng": 73.73001094,
		"pop": 446260.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Rajasthan"
	},
	{
		"city": "Gorakhpur",
		"lat": 26.75039431,
		"lng": 83.38001623,
		"pop": 674246,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Uttar Pradesh"
	},
	{
		"city": "Barddhaman",
		"lat": 23.25037539,
		"lng": 87.86496212,
		"pop": 301725,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "West Bengal"
	},
	{
		"city": "Gaya",
		"lat": 24.79997072,
		"lng": 85.00002071,
		"pop": 423692,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Bihar"
	},
	{
		"city": "Nellore",
		"lat": 14.43998293,
		"lng": 79.98993892,
		"pop": 541081,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Andhra Pradesh"
	},
	{
		"city": "Kurnool",
		"lat": 15.83000144,
		"lng": 78.03000688,
		"pop": 351522,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Andhra Pradesh"
	},
	{
		"city": "Guntur",
		"lat": 16.32999676,
		"lng": 80.4500142,
		"pop": 530577,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Andhra Pradesh"
	},
	{
		"city": "Tumkur",
		"lat": 13.32997316,
		"lng": 77.1000378,
		"pop": 353482.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Karnataka"
	},
	{
		"city": "Davangere",
		"lat": 14.47000694,
		"lng": 75.92000647,
		"pop": 469344.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Karnataka"
	},
	{
		"city": "Bellary",
		"lat": 15.15004295,
		"lng": 76.91503617,
		"pop": 391034.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Karnataka"
	},
	{
		"city": "Belgaum",
		"lat": 15.86501223,
		"lng": 74.5050024,
		"pop": 609472.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Karnataka"
	},
	{
		"city": "Tuticorin",
		"lat": 8.81999005,
		"lng": 78.13000077,
		"pop": 436094,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Tamil Nadu"
	},
	{
		"city": "Chandigarh",
		"lat": 30.71999697,
		"lng": 76.78000565,
		"pop": 946685.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Chandigarh"
	},
	{
		"city": "Jammu",
		"lat": 32.71178754,
		"lng": 74.84673865,
		"pop": 628283.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Jammu and Kashmir"
	},
	{
		"city": "Sholapur",
		"lat": 17.6704059,
		"lng": 75.90000769,
		"pop": 1009056,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Maharashtra"
	},
	{
		"city": "Aurangabad",
		"lat": 19.89569643,
		"lng": 75.32030147,
		"pop": 1064720.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Maharashtra"
	},
	{
		"city": "Nasik",
		"lat": 20.00041872,
		"lng": 73.77998205,
		"pop": 1381248.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Maharashtra"
	},
	{
		"city": "Jullundur",
		"lat": 31.33492067,
		"lng": 75.56902014,
		"pop": 820089,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Punjab"
	},
	{
		"city": "Allahabad",
		"lat": 25.45499534,
		"lng": 81.84000688,
		"pop": 1137219,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Uttar Pradesh"
	},
	{
		"city": "Moradabad",
		"lat": 28.8417912,
		"lng": 78.75678422,
		"pop": 754069.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Uttar Pradesh"
	},
	{
		"city": "Ghaziabad",
		"lat": 28.66038108,
		"lng": 77.40839107,
		"pop": 1270095.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Uttar Pradesh"
	},
	{
		"city": "Agra",
		"lat": 27.17042035,
		"lng": 78.01502071,
		"pop": 1511027.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Uttar Pradesh"
	},
	{
		"city": "Aligarh",
		"lat": 27.89221092,
		"lng": 78.06178788,
		"pop": 779103.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Uttar Pradesh"
	},
	{
		"city": "Meerut",
		"lat": 29.00041201,
		"lng": 77.70000118,
		"pop": 1310592,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Uttar Pradesh"
	},
	{
		"city": "Dhanbad",
		"lat": 23.80039349,
		"lng": 86.41998572,
		"pop": 732818,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Jharkhand"
	},
	{
		"city": "Gwalior",
		"lat": 26.2299868,
		"lng": 78.18007523,
		"pop": 930229,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Madhya Pradesh"
	},
	{
		"city": "Vadodara",
		"lat": 22.31001935,
		"lng": 73.18001868,
		"pop": 1582738,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Dadra and Nagar Haveli"
	},
	{
		"city": "Rajkot",
		"lat": 22.31001935,
		"lng": 70.80000891,
		"pop": 1179941,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Dadra and Nagar Haveli"
	},
	{
		"city": "Faridabad",
		"lat": 28.4333333,
		"lng": 77.3166667,
		"pop": 1394000,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Haryana"
	},
	{
		"city": "Srinagar",
		"lat": 34.09997154,
		"lng": 74.81500932,
		"pop": 1057928.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Jammu and Kashmir"
	},
	{
		"city": "Vijayawada",
		"lat": 16.51995933,
		"lng": 80.63000321,
		"pop": 1005793.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Andhra Pradesh"
	},
	{
		"city": "Thiruvananthapuram",
		"lat": 8.499983743,
		"lng": 76.95002112,
		"pop": 869076.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Kerala"
	},
	{
		"city": "Kochi",
		"lat": 10.01500755,
		"lng": 76.22391557,
		"pop": 1061848,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Kerala"
	},
	{
		"city": "Cuttack",
		"lat": 20.47000246,
		"lng": 85.88994055,
		"pop": 580000,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Orissa"
	},
	{
		"city": "Hubli",
		"lat": 15.35997845,
		"lng": 75.12501623,
		"pop": 841402,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Karnataka"
	},
	{
		"city": "Mangalore",
		"lat": 12.90002525,
		"lng": 74.84999426,
		"pop": 597009.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Karnataka"
	},
	{
		"city": "Mysore",
		"lat": 12.30998374,
		"lng": 76.66001298,
		"pop": 877656.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Karnataka"
	},
	{
		"city": "Gulbarga",
		"lat": 17.34996035,
		"lng": 76.82000321,
		"pop": 482546.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Karnataka"
	},
	{
		"city": "Kolhapur",
		"lat": 16.70000002,
		"lng": 74.22000688,
		"pop": 655920.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Maharashtra"
	},
	{
		"city": "Nanded",
		"lat": 19.16997845,
		"lng": 77.30002559,
		"pop": 587136,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Maharashtra"
	},
	{
		"city": "Akola",
		"lat": 20.70998781,
		"lng": 77.01001745,
		"pop": 466179.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Maharashtra"
	},
	{
		"city": "Guwahati",
		"lat": 26.16001691,
		"lng": 91.76999508,
		"pop": 500258,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Assam"
	},
	{
		"city": "Ludhiana",
		"lat": 30.92776206,
		"lng": 75.87225745,
		"pop": 1597184,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Punjab"
	},
	{
		"city": "Kota",
		"lat": 25.17999921,
		"lng": 75.83499874,
		"pop": 795044,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Rajasthan"
	},
	{
		"city": "Jodhpur",
		"lat": 26.29176597,
		"lng": 73.01677283,
		"pop": 958238,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Rajasthan"
	},
	{
		"city": "Lucknow",
		"lat": 26.85503908,
		"lng": 80.91499874,
		"pop": 2583505.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Uttar Pradesh"
	},
	{
		"city": "Saharanpur",
		"lat": 29.97001691,
		"lng": 77.55003617,
		"pop": 484873,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Uttar Pradesh"
	},
	{
		"city": "Ranchi",
		"lat": 23.37000633,
		"lng": 85.33002641,
		"pop": 945227,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Jharkhand"
	},
	{
		"city": "Bhagalpur",
		"lat": 25.22999615,
		"lng": 86.98000321,
		"pop": 361548,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Bihar"
	},
	{
		"city": "Raipur",
		"lat": 21.23499453,
		"lng": 81.63500647,
		"pop": 777497.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Chhattisgarh"
	},
	{
		"city": "Jabalpur",
		"lat": 23.17505699,
		"lng": 79.95505733,
		"pop": 1157584,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Madhya Pradesh"
	},
	{
		"city": "Indore",
		"lat": 22.71505922,
		"lng": 75.86502274,
		"pop": 1931520.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Madhya Pradesh"
	},
	{
		"city": "Salem",
		"lat": 11.66999697,
		"lng": 78.18007523,
		"pop": 825698,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Tamil Nadu"
	},
	{
		"city": "Tiruchirappalli",
		"lat": 10.80999778,
		"lng": 78.68996659,
		"pop": 863242,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Tamil Nadu"
	},
	{
		"city": "Kozhikode",
		"lat": 11.25043601,
		"lng": 75.76998979,
		"pop": 696461,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Kerala"
	},
	{
		"city": "Bhubaneshwar",
		"lat": 20.27042808,
		"lng": 85.82736039,
		"pop": 803121.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Orissa"
	},
	{
		"city": "Jamshedpur",
		"lat": 22.78753542,
		"lng": 86.19751868,
		"pop": 958169,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Jharkhand"
	},
	{
		"city": "Vishakhapatnam",
		"lat": 17.73001467,
		"lng": 83.30498205,
		"pop": 1296089,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Andhra Pradesh"
	},
	{
		"city": "Amritsar",
		"lat": 31.63999249,
		"lng": 74.86999304,
		"pop": 1152225,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Punjab"
	},
	{
		"city": "Varanasi",
		"lat": 25.32999005,
		"lng": 83.00003943,
		"pop": 1258202,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Uttar Pradesh"
	},
	{
		"city": "Asansol",
		"lat": 23.6833333,
		"lng": 86.9833333,
		"pop": 1328000,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "West Bengal"
	},
	{
		"city": "Bhilai",
		"lat": 21.2166667,
		"lng": 81.4333333,
		"pop": 1097000,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Chhattisgarh"
	},
	{
		"city": "Bhopal",
		"lat": 23.24998781,
		"lng": 77.40999304,
		"pop": 1663457,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Madhya Pradesh"
	},
	{
		"city": "Madurai",
		"lat": 9.920026264,
		"lng": 78.12002722,
		"pop": 1101954,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Tamil Nadu"
	},
	{
		"city": "Coimbatore",
		"lat": 10.99996035,
		"lng": 76.95002112,
		"pop": 1327911.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Tamil Nadu"
	},
	{
		"city": "Delhi",
		"lat": 28.6699929,
		"lng": 77.23000403,
		"pop": 11779606.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Delhi"
	},
	{
		"city": "Hyderabad",
		"lat": 17.39998313,
		"lng": 78.47995357,
		"pop": 4986908,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Andhra Pradesh"
	},
	{
		"city": "Pune",
		"lat": 18.53001752,
		"lng": 73.85000362,
		"pop": 3803872,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Maharashtra"
	},
	{
		"city": "Nagpur",
		"lat": 21.16995974,
		"lng": 79.08999385,
		"pop": 2341009,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Maharashtra"
	},
	{
		"city": "Jaipur",
		"lat": 26.92113324,
		"lng": 75.80998734,
		"pop": 2814379,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Rajasthan"
	},
	{
		"city": "Kanpur",
		"lat": 26.4599986,
		"lng": 80.3199963,
		"pop": 2992624.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Uttar Pradesh"
	},
	{
		"city": "Patna",
		"lat": 25.62495913,
		"lng": 85.13003861,
		"pop": 1878960,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Bihar"
	},
	{
		"city": "Chennai",
		"lat": 13.08998781,
		"lng": 80.27999874,
		"pop": 5745531.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Tamil Nadu"
	},
	{
		"city": "Ahmedabad",
		"lat": 23.03005292,
		"lng": 72.58000362,
		"pop": 4547355,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Dadra and Nagar Haveli"
	},
	{
		"city": "Surat",
		"lat": 21.19998374,
		"lng": 72.84003943,
		"pop": 3368252,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Dadra and Nagar Haveli"
	},
	{
		"city": "New Delhi",
		"lat": 28.60002301,
		"lng": 77.19998002,
		"pop": 317797,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Delhi"
	},
	{
		"city": "Bangalore",
		"lat": 12.96999514,
		"lng": 77.56000972,
		"pop": 5945523.5,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Karnataka"
	},
	{
		"city": "Mumbai",
		"lat": 19.01699038,
		"lng": 72.8569893,
		"pop": 15834918,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "Maharashtra"
	},
	{
		"city": "Kolkata",
		"lat": 22.4949693,
		"lng": 88.32467566,
		"pop": 9709196,
		"iso2": "IN",
		"iso3": "IND",
		"prov": "West Bengal"
	},
	{
		"city": "Binjai",
		"lat": 3.620359109,
		"lng": 98.50007524,
		"pop": 405494.5,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Sumatera Utara"
	},
	{
		"city": "Bukittinggi",
		"lat": -0.303148174,
		"lng": 100.3614603,
		"pop": 302855,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Sumatera Barat"
	},
	{
		"city": "Mataram",
		"lat": -8.579542217,
		"lng": 116.1350195,
		"pop": 409041.5,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Nusa Tenggara Barat"
	},
	{
		"city": "Cilacap",
		"lat": -7.718819561,
		"lng": 109.0154024,
		"pop": 1174964,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Jawa Tengah"
	},
	{
		"city": "Bekasi",
		"lat": -6.217257468,
		"lng": 106.972323,
		"pop": 1949165,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Jakarta Raya"
	},
	{
		"city": "Tanjungkarang-Telubketung",
		"lat": -5.449604066,
		"lng": 105.3000219,
		"pop": 881801,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Lampung"
	},
	{
		"city": "Pasuruan",
		"lat": -7.629574362,
		"lng": 112.9000232,
		"pop": 343161,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Jawa Timur"
	},
	{
		"city": "Denpasar",
		"lat": -8.650028871,
		"lng": 115.2199849,
		"pop": 569133.5,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Bali"
	},
	{
		"city": "Pekanbaru",
		"lat": 0.564964212,
		"lng": 101.425013,
		"pop": 705218,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Riau"
	},
	{
		"city": "Manado",
		"lat": 1.480024637,
		"lng": 124.8499914,
		"pop": 449497.5,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Sulawesi Utara"
	},
	{
		"city": "Yogyakarta",
		"lat": -7.77995278,
		"lng": 110.3750093,
		"pop": 636660,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Yogyakarta"
	},
	{
		"city": "Palu",
		"lat": -0.907038962,
		"lng": 119.8330367,
		"pop": 473871,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Sulawesi Tengah"
	},
	{
		"city": "Samarinda",
		"lat": -0.500035381,
		"lng": 117.1499963,
		"pop": 473694,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Kalimantan Timur"
	},
	{
		"city": "Bogor",
		"lat": -6.570000795,
		"lng": 106.7500109,
		"pop": 859000,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Jawa Barat"
	},
	{
		"city": "Bengkulu",
		"lat": -3.800040671,
		"lng": 102.2699743,
		"pop": 368192.5,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Bengkulu"
	},
	{
		"city": "Pontianak",
		"lat": -0.029986553,
		"lng": 109.3199833,
		"pop": 578807.5,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Kalimantan Barat"
	},
	{
		"city": "Jambi",
		"lat": -1.589994691,
		"lng": 103.6100476,
		"pop": 438706.5,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Jambi"
	},
	{
		"city": "Banda Aceh",
		"lat": 5.549982929,
		"lng": 95.32001094,
		"pop": 344065.5,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Aceh"
	},
	{
		"city": "Balikpapan",
		"lat": -1.250015443,
		"lng": 116.8300158,
		"pop": 439885.5,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Kalimantan Timur"
	},
	{
		"city": "Surakarta",
		"lat": -7.564978822,
		"lng": 110.8250077,
		"pop": 555308,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Jawa Tengah"
	},
	{
		"city": "Bandar Lampung",
		"lat": -5.430018698,
		"lng": 105.2699979,
		"pop": 795757,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Lampung"
	},
	{
		"city": "Malang",
		"lat": -7.97999225,
		"lng": 112.610015,
		"pop": 775858,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Jawa Timur"
	},
	{
		"city": "Padang",
		"lat": -0.960007305,
		"lng": 100.3600134,
		"pop": 847676,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Sumatera Barat"
	},
	{
		"city": "Semarang",
		"lat": -6.966617412,
		"lng": 110.4200195,
		"pop": 1342042,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Jawa Tengah"
	},
	{
		"city": "Palembang",
		"lat": -2.980039043,
		"lng": 104.7500297,
		"pop": 1595250,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Sumatera Selatan"
	},
	{
		"city": "Bandjarmasin",
		"lat": -3.329991843,
		"lng": 114.5800756,
		"pop": 588206.5,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Kalimantan Selatan"
	},
	{
		"city": "Ujungpandang",
		"lat": -5.139958884,
		"lng": 119.4320275,
		"pop": 1262000,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Sulawesi Selatan"
	},
	{
		"city": "Medan",
		"lat": 3.579973978,
		"lng": 98.65004024,
		"pop": 1932985.5,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Sumatera Utara"
	},
	{
		"city": "Bandung",
		"lat": -6.950029278,
		"lng": 107.5700126,
		"pop": 2046859.5,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Jawa Barat"
	},
	{
		"city": "Surabaya",
		"lat": -7.249235821,
		"lng": 112.7508333,
		"pop": 2609829,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Jawa Timur"
	},
	{
		"city": "Jakarta",
		"lat": -6.174417705,
		"lng": 106.8294376,
		"pop": 8832560.5,
		"iso2": "ID",
		"iso3": "IDN",
		"prov": "Jakarta Raya"
	},
	{
		"city": "Zanjan",
		"lat": 36.67002138,
		"lng": 48.50002641,
		"pop": 355012.5,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Zanjan"
	},
	{
		"city": "Orumiyeh",
		"lat": 37.52999473,
		"lng": 44.99998165,
		"pop": 577307,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "West Azarbaijan"
	},
	{
		"city": "Sanandaj",
		"lat": 35.30000165,
		"lng": 47.02001339,
		"pop": 331798,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Kordestan"
	},
	{
		"city": "Khomeini Shahr",
		"lat": 32.70041872,
		"lng": 51.46997432,
		"pop": 437138,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Esfahan"
	},
	{
		"city": "Karaj",
		"lat": 35.8003587,
		"lng": 50.97000484,
		"pop": 1423000,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Tehran"
	},
	{
		"city": "Dezful",
		"lat": 32.38038658,
		"lng": 48.4700024,
		"pop": 315482,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Khuzestan"
	},
	{
		"city": "Khorramabad",
		"lat": 33.48042279,
		"lng": 48.35000972,
		"pop": 352511.5,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Lorestan"
	},
	{
		"city": "Arak",
		"lat": 34.08041201,
		"lng": 49.70000484,
		"pop": 463449,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Markazi"
	},
	{
		"city": "Kerman",
		"lat": 30.29999676,
		"lng": 57.08001949,
		"pop": 556518,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Kerman"
	},
	{
		"city": "Abadan",
		"lat": 30.33074424,
		"lng": 48.2796781,
		"pop": 315129,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Khuzestan"
	},
	{
		"city": "Ardabil",
		"lat": 38.25000246,
		"lng": 48.30003861,
		"pop": 412678,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Ardebil"
	},
	{
		"city": "Qom",
		"lat": 34.65001548,
		"lng": 50.95000606,
		"pop": 933478,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Qom"
	},
	{
		"city": "Qazvin",
		"lat": 36.27001996,
		"lng": 49.99998653,
		"pop": 399093,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Qazvin"
	},
	{
		"city": "Kermanshah",
		"lat": 34.38000612,
		"lng": 47.06001094,
		"pop": 828313,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Kermanshah"
	},
	{
		"city": "Rasht",
		"lat": 37.29998293,
		"lng": 49.62998328,
		"pop": 544737.5,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Gilan"
	},
	{
		"city": "Zahedan",
		"lat": 29.49999392,
		"lng": 60.83002315,
		"pop": 575433.5,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Sistan and Baluchestan"
	},
	{
		"city": "Yazd",
		"lat": 31.92005292,
		"lng": 54.37000403,
		"pop": 451923.5,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Yazd"
	},
	{
		"city": "Ahvaz",
		"lat": 31.27998863,
		"lng": 48.72001298,
		"pop": 918572.5,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Khuzestan"
	},
	{
		"city": "Bandar-e-Abbas",
		"lat": 27.20405978,
		"lng": 56.27213554,
		"pop": 414503.5,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Hormozgan"
	},
	{
		"city": "Tabriz",
		"lat": 38.08629152,
		"lng": 46.30124589,
		"pop": 1304713,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "East Azarbaijan"
	},
	{
		"city": "Isfahan",
		"lat": 32.70000531,
		"lng": 51.7000378,
		"pop": 1572883,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Esfahan"
	},
	{
		"city": "Shiraz",
		"lat": 29.62996014,
		"lng": 52.57001054,
		"pop": 1240000,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Fars"
	},
	{
		"city": "Mashhad",
		"lat": 36.27001996,
		"lng": 59.5699967,
		"pop": 2318126.5,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Razavi Khorasan"
	},
	{
		"city": "Tehran",
		"lat": 35.67194277,
		"lng": 51.42434403,
		"pop": 7513154.5,
		"iso2": "IR",
		"iso3": "IRN",
		"prov": "Tehran"
	},
	{
		"city": "Dahuk",
		"lat": 36.86670013,
		"lng": 43.00000263,
		"pop": 620500,
		"iso2": "IQ",
		"iso3": "IRQ",
		"prov": "Dihok"
	},
	{
		"city": "Ad Diwaniyah",
		"lat": 31.9889376,
		"lng": 44.92396562,
		"pop": 338604.5,
		"iso2": "IQ",
		"iso3": "IRQ",
		"prov": "Al-Qadisiyah"
	},
	{
		"city": "Karbala",
		"lat": 32.61492006,
		"lng": 44.02448564,
		"pop": 472571,
		"iso2": "IQ",
		"iso3": "IRQ",
		"prov": "Karbala'"
	},
	{
		"city": "An Nasiriyah",
		"lat": 31.04294883,
		"lng": 46.26755286,
		"pop": 425898,
		"iso2": "IQ",
		"iso3": "IRQ",
		"prov": "Dhi-Qar"
	},
	{
		"city": "Al Amarah",
		"lat": 31.84160809,
		"lng": 47.15116817,
		"pop": 334154.5,
		"iso2": "IQ",
		"iso3": "IRQ",
		"prov": "Maysan"
	},
	{
		"city": "Al Kut",
		"lat": 32.49071576,
		"lng": 45.83037024,
		"pop": 318341.5,
		"iso2": "IQ",
		"iso3": "IRQ",
		"prov": "Wasit"
	},
	{
		"city": "As Sulaymaniyah",
		"lat": 35.56127769,
		"lng": 45.43085974,
		"pop": 654318,
		"iso2": "IQ",
		"iso3": "IRQ",
		"prov": "As-Sulaymaniyah"
	},
	{
		"city": "Al Hillah",
		"lat": 32.47213808,
		"lng": 44.42172237,
		"pop": 479652.5,
		"iso2": "IQ",
		"iso3": "IRQ",
		"prov": "Babil"
	},
	{
		"city": "Irbil",
		"lat": 36.1790436,
		"lng": 44.00862097,
		"pop": 795870,
		"iso2": "IQ",
		"iso3": "IRQ",
		"prov": "Arbil"
	},
	{
		"city": "Kirkuk",
		"lat": 35.4722392,
		"lng": 44.3922668,
		"pop": 555052.5,
		"iso2": "IQ",
		"iso3": "IRQ",
		"prov": "At-Ta'mim"
	},
	{
		"city": "Mosul",
		"lat": 36.34500246,
		"lng": 43.14500443,
		"pop": 1228467,
		"iso2": "IQ",
		"iso3": "IRQ",
		"prov": "Ninawa"
	},
	{
		"city": "An Najaf",
		"lat": 32.00033225,
		"lng": 44.33537105,
		"pop": 612776,
		"iso2": "IQ",
		"iso3": "IRQ",
		"prov": "An-Najaf"
	},
	{
		"city": "Basra",
		"lat": 30.51352378,
		"lng": 47.81355668,
		"pop": 870000,
		"iso2": "IQ",
		"iso3": "IRQ",
		"prov": "Al-Basrah"
	},
	{
		"city": "Baghdad",
		"lat": 33.3386485,
		"lng": 44.39386877,
		"pop": 5054000,
		"iso2": "IQ",
		"iso3": "IRQ",
		"prov": "Baghdad"
	},
	{
		"city": "Cork",
		"lat": 51.89860089,
		"lng": -8.49577112,
		"pop": 162852,
		"iso2": "IE",
		"iso3": "IRL",
		"prov": "Cork"
	},
	{
		"city": "Dublin",
		"lat": 53.33306114,
		"lng": -6.248905682,
		"pop": 1013988,
		"iso2": "IE",
		"iso3": "IRL",
		"prov": "Dublin"
	},
	{
		"city": "Haifa",
		"lat": 32.8204114,
		"lng": 34.98002478,
		"pop": 639150,
		"iso2": "IL",
		"iso3": "ISR",
		"prov": "Haifa"
	},
	{
		"city": "Jerusalem",
		"lat": 31.77840782,
		"lng": 35.20662593,
		"pop": 915150,
		"iso2": "IL",
		"iso3": "ISR",
		"prov": "Jerusalem"
	},
	{
		"city": "Tel Aviv-Yafo",
		"lat": 32.07999147,
		"lng": 34.77001176,
		"pop": 1745179,
		"iso2": "IL",
		"iso3": "ISR",
		"prov": "Tel Aviv"
	},
	{
		"city": "Modena",
		"lat": 44.65002525,
		"lng": 10.91999467,
		"pop": 175034.5,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Emilia-Romagna"
	},
	{
		"city": "Reggio di Calabria",
		"lat": 38.11499778,
		"lng": 15.64136023,
		"pop": 179034.5,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Calabria"
	},
	{
		"city": "Caserta",
		"lat": 41.05996014,
		"lng": 14.33735714,
		"pop": 164744,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Campania"
	},
	{
		"city": "Como",
		"lat": 45.81000612,
		"lng": 9.08000362,
		"pop": 167438,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Lombardia"
	},
	{
		"city": "Udine",
		"lat": 46.07001609,
		"lng": 13.2400081,
		"pop": 107019.5,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Friuli-Venezia Giulia"
	},
	{
		"city": "Treviso",
		"lat": 45.67001467,
		"lng": 12.24001745,
		"pop": 128726.5,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Veneto"
	},
	{
		"city": "Parma",
		"lat": 44.81042889,
		"lng": 10.32003129,
		"pop": 164734,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Emilia-Romagna"
	},
	{
		"city": "Ravenna",
		"lat": 44.42037518,
		"lng": 12.22001868,
		"pop": 124302.5,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Emilia-Romagna"
	},
	{
		"city": "Ferrara",
		"lat": 44.85042645,
		"lng": 11.60992672,
		"pop": 121754,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Emilia-Romagna"
	},
	{
		"city": "Bologna",
		"lat": 44.50042198,
		"lng": 11.34002071,
		"pop": 429694.5,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Emilia-Romagna"
	},
	{
		"city": "Cagliari",
		"lat": 39.22239789,
		"lng": 9.103981485,
		"pop": 227880,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Sardegna"
	},
	{
		"city": "Pisa",
		"lat": 43.72046958,
		"lng": 10.40002641,
		"pop": 146515,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Toscana"
	},
	{
		"city": "Livorno",
		"lat": 43.55113366,
		"lng": 10.3022747,
		"pop": 145016.5,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Toscana"
	},
	{
		"city": "Salerno",
		"lat": 40.68039675,
		"lng": 14.76994055,
		"pop": 546922,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Campania"
	},
	{
		"city": "Bari",
		"lat": 41.1142204,
		"lng": 16.87275793,
		"pop": 408554.5,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Apulia"
	},
	{
		"city": "Foggia",
		"lat": 41.46047833,
		"lng": 15.55996985,
		"pop": 147028,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Apulia"
	},
	{
		"city": "Lecce",
		"lat": 40.36039044,
		"lng": 18.14999263,
		"pop": 122942.5,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Apulia"
	},
	{
		"city": "Taranto",
		"lat": 40.50839174,
		"lng": 17.22999711,
		"pop": 148807,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Apulia"
	},
	{
		"city": "Messina",
		"lat": 38.2004706,
		"lng": 15.5499963,
		"pop": 224047.5,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Sicily"
	},
	{
		"city": "Siracusa",
		"lat": 37.0703587,
		"lng": 15.28996049,
		"pop": 123110,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Sicily"
	},
	{
		"city": "Pescara",
		"lat": 42.45543052,
		"lng": 14.21865637,
		"pop": 215537.5,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Abruzzo"
	},
	{
		"city": "Perugia",
		"lat": 43.11037762,
		"lng": 12.38998246,
		"pop": 141998,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Umbria"
	},
	{
		"city": "Bergamo",
		"lat": 45.70040041,
		"lng": 9.669993448,
		"pop": 160658,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Lombardia"
	},
	{
		"city": "Trieste",
		"lat": 45.65037762,
		"lng": 13.80002559,
		"pop": 213609.5,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Friuli-Venezia Giulia"
	},
	{
		"city": "Trento",
		"lat": 46.08042889,
		"lng": 11.11998246,
		"pop": 106377,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Trentino-Alto Adige"
	},
	{
		"city": "Verona",
		"lat": 45.44039044,
		"lng": 10.99001623,
		"pop": 300333.5,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Veneto"
	},
	{
		"city": "Sassari",
		"lat": 40.73000612,
		"lng": 8.57000891,
		"pop": 102822.5,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Sardegna"
	},
	{
		"city": "Turin",
		"lat": 45.07038719,
		"lng": 7.669960489,
		"pop": 1258631.5,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Piemonte"
	},
	{
		"city": "Genoa",
		"lat": 44.40998822,
		"lng": 8.930038614,
		"pop": 624724,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Liguria"
	},
	{
		"city": "Florence",
		"lat": 43.78000083,
		"lng": 11.25000036,
		"pop": 935758.5,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Toscana"
	},
	{
		"city": "Catania",
		"lat": 37.49997072,
		"lng": 15.07999914,
		"pop": 482908,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Sicily"
	},
	{
		"city": "Venice",
		"lat": 45.43865928,
		"lng": 12.33499874,
		"pop": 270816,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Veneto"
	},
	{
		"city": "Palermo",
		"lat": 38.12502301,
		"lng": 13.35002722,
		"pop": 767587.5,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Sicily"
	},
	{
		"city": "Naples",
		"lat": 40.84002525,
		"lng": 14.24501135,
		"pop": 1619486,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Campania"
	},
	{
		"city": "Milan",
		"lat": 45.4699752,
		"lng": 9.20500891,
		"pop": 2125830.5,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Lombardia"
	},
	{
		"city": "Rome",
		"lat": 41.89595563,
		"lng": 12.48325842,
		"pop": 1687226,
		"iso2": "IT",
		"iso3": "ITA",
		"prov": "Lazio"
	},
	{
		"city": "Bouake",
		"lat": 7.689981505,
		"lng": -5.030013673,
		"pop": 511151,
		"iso2": "CI",
		"iso3": "CIV",
		"prov": "Vallée du Bandama"
	},
	{
		"city": "Abidjan",
		"lat": 5.319996967,
		"lng": -4.04004826,
		"pop": 3496197.5,
		"iso2": "CI",
		"iso3": "CIV",
		"prov": "Lagunes"
	},
	{
		"city": "Kingston",
		"lat": 17.97707662,
		"lng": -76.76743371,
		"pop": 801336.5,
		"iso2": "JM",
		"iso3": "JAM",
		"prov": "Kingston"
	},
	{
		"city": "Okayama",
		"lat": 34.67202964,
		"lng": 133.9170865,
		"pop": 752872,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Okayama"
	},
	{
		"city": "Takamatsu",
		"lat": 34.34473696,
		"lng": 134.044779,
		"pop": 329861.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Kagawa"
	},
	{
		"city": "Tokushima",
		"lat": 34.06738955,
		"lng": 134.5525,
		"pop": 355552.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Tokushima"
	},
	{
		"city": "Toyama",
		"lat": 36.69999371,
		"lng": 137.2300109,
		"pop": 329172,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Toyama"
	},
	{
		"city": "Otsu",
		"lat": 35.006402,
		"lng": 135.8674068,
		"pop": 437802.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Shiga"
	},
	{
		"city": "Maebashi",
		"lat": 36.39269981,
		"lng": 139.0726892,
		"pop": 313791,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Gunma"
	},
	{
		"city": "Kawasaki",
		"lat": 35.52998761,
		"lng": 139.705002,
		"pop": 1372025.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Kanagawa"
	},
	{
		"city": "Kawagoe",
		"lat": 35.91769004,
		"lng": 139.4910616,
		"pop": 337931,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Saitama"
	},
	{
		"city": "Utsunomiya",
		"lat": 36.54997703,
		"lng": 139.8700048,
		"pop": 558808.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Tochigi"
	},
	{
		"city": "Hachioji",
		"lat": 35.65770591,
		"lng": 139.3260587,
		"pop": 579399,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Tokyo"
	},
	{
		"city": "Koriyama",
		"lat": 37.40997622,
		"lng": 140.3799996,
		"pop": 302581,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Fukushima"
	},
	{
		"city": "Kitakyushu",
		"lat": 33.87039899,
		"lng": 130.8200146,
		"pop": 990286.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Fukuoka"
	},
	{
		"city": "Kumamoto",
		"lat": 32.80092938,
		"lng": 130.700642,
		"pop": 699327.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Kumamoto"
	},
	{
		"city": "Oita",
		"lat": 33.24322797,
		"lng": 131.5978999,
		"pop": 412100.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Oita"
	},
	{
		"city": "Gifu",
		"lat": 35.42309491,
		"lng": 136.7627526,
		"pop": 405304.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Gifu"
	},
	{
		"city": "Tsu",
		"lat": 34.71706565,
		"lng": 136.5166695,
		"pop": 392484.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Mie"
	},
	{
		"city": "Shizuoka",
		"lat": 34.98583478,
		"lng": 138.3853926,
		"pop": 686446.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Shizuoka"
	},
	{
		"city": "Hamamatsu",
		"lat": 34.71807334,
		"lng": 137.7327193,
		"pop": 887242.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Shizuoka"
	},
	{
		"city": "Wakayama",
		"lat": 34.22311647,
		"lng": 135.1677079,
		"pop": 395503,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Wakayama"
	},
	{
		"city": "Mito",
		"lat": 36.37042727,
		"lng": 140.4800451,
		"pop": 300215,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Ibaraki"
	},
	{
		"city": "Iwaki",
		"lat": 37.0553467,
		"lng": 140.8900459,
		"pop": 324677,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Fukushima"
	},
	{
		"city": "Kagoshima",
		"lat": 31.58596478,
		"lng": 130.561064,
		"pop": 536092.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Kagoshima"
	},
	{
		"city": "Matsuyama",
		"lat": 33.84554262,
		"lng": 132.765839,
		"pop": 525089,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Ehime"
	},
	{
		"city": "Kanazawa",
		"lat": 36.56000226,
		"lng": 136.6400211,
		"pop": 505093,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Ishikawa"
	},
	{
		"city": "Asahikawa",
		"lat": 43.75501528,
		"lng": 142.3799808,
		"pop": 341079.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Hokkaido"
	},
	{
		"city": "Kobe",
		"lat": 34.67998781,
		"lng": 135.1699816,
		"pop": 1528478,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Hyogo"
	},
	{
		"city": "Yokohama",
		"lat": 35.32002626,
		"lng": 139.5800484,
		"pop": 3697894,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Kanagawa"
	},
	{
		"city": "Akita",
		"lat": 39.70999086,
		"lng": 140.0899914,
		"pop": 300962.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Akita"
	},
	{
		"city": "Niigata",
		"lat": 37.91999676,
		"lng": 139.0400297,
		"pop": 537534.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Niigata"
	},
	{
		"city": "Fukuoka",
		"lat": 33.59501528,
		"lng": 130.4100138,
		"pop": 2092144.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Fukuoka"
	},
	{
		"city": "Miyazaki",
		"lat": 31.91824424,
		"lng": 131.418376,
		"pop": 317793.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Miyazaki"
	},
	{
		"city": "Naha",
		"lat": 26.20717165,
		"lng": 127.6729716,
		"pop": 611572,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Okinawa"
	},
	{
		"city": "Kochi",
		"lat": 33.56243329,
		"lng": 133.5375232,
		"pop": 323095,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Kochi"
	},
	{
		"city": "Nagoya",
		"lat": 35.15499758,
		"lng": 136.9149914,
		"pop": 2710639.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Aichi"
	},
	{
		"city": "Nagano",
		"lat": 36.64999676,
		"lng": 138.1700052,
		"pop": 477243.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Nagano"
	},
	{
		"city": "Kyoto",
		"lat": 35.02999229,
		"lng": 135.7499979,
		"pop": 1632320,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Kyoto"
	},
	{
		"city": "Sendai",
		"lat": 38.28710614,
		"lng": 141.0217175,
		"pop": 1643781,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Miyagi"
	},
	{
		"city": "Nagasaki",
		"lat": 32.76498842,
		"lng": 129.8850329,
		"pop": 422829.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Nagasaki"
	},
	{
		"city": "Hiroshima",
		"lat": 34.3878351,
		"lng": 132.442913,
		"pop": 1594420.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Hiroshima"
	},
	{
		"city": "Sapporo",
		"lat": 43.07497927,
		"lng": 141.3400443,
		"pop": 2202893,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Hokkaido"
	},
	{
		"city": "Osaka",
		"lat": 34.75003522,
		"lng": 135.4601448,
		"pop": 6943206.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Osaka"
	},
	{
		"city": "Tokyo",
		"lat": 35.68501691,
		"lng": 139.7514074,
		"pop": 22006299.5,
		"iso2": "JP",
		"iso3": "JPN",
		"prov": "Tokyo"
	},
	{
		"city": "Irbid",
		"lat": 32.54998863,
		"lng": 35.84999752,
		"pop": 471020,
		"iso2": "JO",
		"iso3": "JOR",
		"prov": "Irbid"
	},
	{
		"city": "Az Zarqa",
		"lat": 32.06999208,
		"lng": 36.1000081,
		"pop": 843678,
		"iso2": "JO",
		"iso3": "JOR",
		"prov": "Zarqa"
	},
	{
		"city": "Amman",
		"lat": 31.95002525,
		"lng": 35.93329993,
		"pop": 1060000,
		"iso2": "JO",
		"iso3": "JOR",
		"prov": "Amman"
	},
	{
		"city": "Pavlodar",
		"lat": 52.29999758,
		"lng": 76.95002112,
		"pop": 316254,
		"iso2": "KZ",
		"iso3": "KAZ",
		"prov": "Pavlodar"
	},
	{
		"city": "Semey",
		"lat": 50.43499514,
		"lng": 80.2750378,
		"pop": 302066.5,
		"iso2": "KZ",
		"iso3": "KAZ",
		"prov": "East Kazakhstan"
	},
	{
		"city": "Shymkent",
		"lat": 42.32001243,
		"lng": 69.59501786,
		"pop": 439712,
		"iso2": "KZ",
		"iso3": "KAZ",
		"prov": "South Kazakhstan"
	},
	{
		"city": "Taraz",
		"lat": 42.89997703,
		"lng": 71.36498734,
		"pop": 332723.5,
		"iso2": "KZ",
		"iso3": "KAZ",
		"prov": "Zhambyl"
	},
	{
		"city": "Astana",
		"lat": 51.1811253,
		"lng": 71.42777421,
		"pop": 335312.5,
		"iso2": "KZ",
		"iso3": "KAZ",
		"prov": "Aqmola"
	},
	{
		"city": "Qaraghandy",
		"lat": 49.88497703,
		"lng": 73.11500972,
		"pop": 378273.5,
		"iso2": "KZ",
		"iso3": "KAZ",
		"prov": "Qaraghandy"
	},
	{
		"city": "Almaty",
		"lat": 43.32498985,
		"lng": 76.91503617,
		"pop": 1096256,
		"iso2": "KZ",
		"iso3": "KAZ",
		"prov": "Almaty"
	},
	{
		"city": "Nakuru",
		"lat": -0.279997132,
		"lng": 36.06998409,
		"pop": 312315,
		"iso2": "KE",
		"iso3": "KEN",
		"prov": "Rift Valley"
	},
	{
		"city": "Kisumu",
		"lat": -0.090034567,
		"lng": 34.75001298,
		"pop": 306047,
		"iso2": "KE",
		"iso3": "KEN",
		"prov": "Nyanza"
	},
	{
		"city": "Mombasa",
		"lat": -4.040026022,
		"lng": 39.68991817,
		"pop": 840834,
		"iso2": "KE",
		"iso3": "KEN",
		"prov": "Coast"
	},
	{
		"city": "Nairobi",
		"lat": -1.283346742,
		"lng": 36.81665686,
		"pop": 2880273.5,
		"iso2": "KE",
		"iso3": "KEN",
		"prov": "Nairobi"
	},
	{
		"city": "Prizren",
		"lat": 42.22932029,
		"lng": 20.75009232,
		"pop": 157574.5,
		"iso2": "",
		"iso3": "KOS",
		"prov": "Prizren"
	},
	{
		"city": "Pristina",
		"lat": 42.66670961,
		"lng": 21.16598425,
		"pop": 331700,
		"iso2": -99,
		"iso3": "KOS",
		"prov": "Pristina"
	},
	{
		"city": "Kuwait",
		"lat": 29.36971763,
		"lng": 47.97830115,
		"pop": 1061532,
		"iso2": "KW",
		"iso3": "KWT",
		"prov": "Al Kuwayt"
	},
	{
		"city": "Bishkek",
		"lat": 42.87307945,
		"lng": 74.58520422,
		"pop": 820606,
		"iso2": "KG",
		"iso3": "KGZ",
		"prov": "Bishkek"
	},
	{
		"city": "Vientiane",
		"lat": 17.96669273,
		"lng": 102.59998,
		"pop": 662174,
		"iso2": "LA",
		"iso3": "LAO",
		"prov": "Vientiane [prefecture]"
	},
	{
		"city": "Daugavpils",
		"lat": 55.87995994,
		"lng": 26.50999914,
		"pop": 109969.5,
		"iso2": "LV",
		"iso3": "LVA",
		"prov": "Daugavpils"
	},
	{
		"city": "Riga",
		"lat": 56.95002382,
		"lng": 24.09996537,
		"pop": 723802.5,
		"iso2": "LV",
		"iso3": "LVA",
		"prov": "Riga"
	},
	{
		"city": "Trablous",
		"lat": 34.42000368,
		"lng": 35.8699963,
		"pop": 361286,
		"iso2": "LB",
		"iso3": "LBN",
		"prov": "North Lebanon"
	},
	{
		"city": "Beirut",
		"lat": 33.87197512,
		"lng": 35.50970821,
		"pop": 1779062.5,
		"iso2": "LB",
		"iso3": "LBN",
		"prov": "Beirut"
	},
	{
		"city": "Monrovia",
		"lat": 6.31055666,
		"lng": -10.80475163,
		"pop": 913331,
		"iso2": "LR",
		"iso3": "LBR",
		"prov": "Montserrado"
	},
	{
		"city": "Misratah",
		"lat": 32.37997316,
		"lng": 15.09999792,
		"pop": 301160,
		"iso2": "LY",
		"iso3": "LBY",
		"prov": "Misratah"
	},
	{
		"city": "Banghazi",
		"lat": 32.11673342,
		"lng": 20.06672318,
		"pop": 881187,
		"iso2": "LY",
		"iso3": "LBY",
		"prov": "Benghazi"
	},
	{
		"city": "Tripoli",
		"lat": 32.89250002,
		"lng": 13.18001176,
		"pop": 1209199,
		"iso2": "LY",
		"iso3": "LBY",
		"prov": "Tajura' wa an Nawahi al Arba"
	},
	{
		"city": "Panevezys",
		"lat": 55.74002016,
		"lng": 24.37002641,
		"pop": 122400,
		"iso2": "LT",
		"iso3": "LTU",
		"prov": "Panevezio"
	},
	{
		"city": "Siauliai",
		"lat": 55.93863853,
		"lng": 23.32502559,
		"pop": 132057.5,
		"iso2": "LT",
		"iso3": "LTU",
		"prov": "Šiauliai"
	},
	{
		"city": "Klaipeda",
		"lat": 55.72040896,
		"lng": 21.11994055,
		"pop": 191334,
		"iso2": "LT",
		"iso3": "LTU",
		"prov": "Klaipedos"
	},
	{
		"city": "Kaunas",
		"lat": 54.95040428,
		"lng": 23.88003048,
		"pop": 363844.5,
		"iso2": "LT",
		"iso3": "LTU",
		"prov": "Kauno"
	},
	{
		"city": "Vilnius",
		"lat": 54.68336631,
		"lng": 25.31663529,
		"pop": 524697.5,
		"iso2": "LT",
		"iso3": "LTU",
		"prov": "Vilniaus"
	},
	{
		"city": "Macau",
		"lat": 22.20299746,
		"lng": 113.5450484,
		"pop": 568700,
		"iso2": "MO",
		"iso3": "MAC",
		"prov": ""
	},
	{
		"city": "Skopje",
		"lat": 42.00000612,
		"lng": 21.43346147,
		"pop": 484488,
		"iso2": "MK",
		"iso3": "MKD",
		"prov": "Centar"
	},
	{
		"city": "Antsirabe",
		"lat": -19.85001707,
		"lng": 47.03329423,
		"pop": 307921,
		"iso2": "MG",
		"iso3": "MDG",
		"prov": "Antananarivo"
	},
	{
		"city": "Antananarivo",
		"lat": -18.91663735,
		"lng": 47.5166239,
		"pop": 1544216.5,
		"iso2": "MG",
		"iso3": "MDG",
		"prov": "Antananarivo"
	},
	{
		"city": "Blantyre",
		"lat": -15.79000649,
		"lng": 34.98994665,
		"pop": 584877,
		"iso2": "MW",
		"iso3": "MWI",
		"prov": "Blantyre"
	},
	{
		"city": "Lilongwe",
		"lat": -13.98329507,
		"lng": 33.78330196,
		"pop": 646750,
		"iso2": "MW",
		"iso3": "MWI",
		"prov": "Lilongwe"
	},
	{
		"city": "Shah Alam",
		"lat": 3.066695996,
		"lng": 101.5499977,
		"pop": 481654,
		"iso2": "MY",
		"iso3": "MYS",
		"prov": "Selangor"
	},
	{
		"city": "Butterworth",
		"lat": 5.417071146,
		"lng": 100.4000109,
		"pop": 464621.5,
		"iso2": "MY",
		"iso3": "MYS",
		"prov": "Pulau Pinang"
	},
	{
		"city": "Seremban",
		"lat": 2.710492166,
		"lng": 101.9400203,
		"pop": 336824,
		"iso2": "MY",
		"iso3": "MYS",
		"prov": "Negeri Sembilan"
	},
	{
		"city": "Kuala Terengganu",
		"lat": 5.330409769,
		"lng": 103.12,
		"pop": 317637.5,
		"iso2": "MY",
		"iso3": "MYS",
		"prov": "Trengganu"
	},
	{
		"city": "Johor Bahru",
		"lat": 1.480024637,
		"lng": 103.7300402,
		"pop": 838744.5,
		"iso2": "MY",
		"iso3": "MYS",
		"prov": "Johor"
	},
	{
		"city": "Kelang",
		"lat": 3.020369892,
		"lng": 101.5500183,
		"pop": 917933.5,
		"iso2": "MY",
		"iso3": "MYS",
		"prov": "Selangor"
	},
	{
		"city": "Ipoh",
		"lat": 4.599989236,
		"lng": 101.0649833,
		"pop": 656227,
		"iso2": "MY",
		"iso3": "MYS",
		"prov": "Perak"
	},
	{
		"city": "Kota Baharu",
		"lat": 6.119973978,
		"lng": 102.2299768,
		"pop": 392449.5,
		"iso2": "MY",
		"iso3": "MYS",
		"prov": "Kelantan"
	},
	{
		"city": "Malacca",
		"lat": 2.206414407,
		"lng": 102.2464615,
		"pop": 645916.5,
		"iso2": "MY",
		"iso3": "MYS",
		"prov": "Melaka"
	},
	{
		"city": "Kuantan",
		"lat": 3.829958719,
		"lng": 103.3200394,
		"pop": 320462,
		"iso2": "MY",
		"iso3": "MYS",
		"prov": "Pahang"
	},
	{
		"city": "Sandakan",
		"lat": 5.842962462,
		"lng": 118.107974,
		"pop": 341788.5,
		"iso2": "MY",
		"iso3": "MYS",
		"prov": "Sabah"
	},
	{
		"city": "Kota Kinabalu",
		"lat": 5.979982523,
		"lng": 116.1100081,
		"pop": 492498.5,
		"iso2": "MY",
		"iso3": "MYS",
		"prov": "Sabah"
	},
	{
		"city": "George Town",
		"lat": 5.413613156,
		"lng": 100.3293679,
		"pop": 1610101,
		"iso2": "MY",
		"iso3": "MYS",
		"prov": "Pulau Pinang"
	},
	{
		"city": "Kuching",
		"lat": 1.529969909,
		"lng": 110.3299991,
		"pop": 537685,
		"iso2": "MY",
		"iso3": "MYS",
		"prov": "Sarawak"
	},
	{
		"city": "Kuala Lumpur",
		"lat": 3.166665872,
		"lng": 101.6999833,
		"pop": 1448000,
		"iso2": "MY",
		"iso3": "MYS",
		"prov": "Selangor"
	},
	{
		"city": "Bamako",
		"lat": 12.65001467,
		"lng": -8.000039105,
		"pop": 1395640.5,
		"iso2": "ML",
		"iso3": "MLI",
		"prov": "Bamako"
	},
	{
		"city": "Valletta",
		"lat": 35.89973248,
		"lng": 14.51471065,
		"pop": 187608,
		"iso2": "MT",
		"iso3": "MLT",
		"prov": ""
	},
	{
		"city": "Nouakchott",
		"lat": 18.08642702,
		"lng": -15.97534041,
		"pop": 701772,
		"iso2": "MR",
		"iso3": "MRT",
		"prov": "Nouakchott"
	},
	{
		"city": "Port Louis",
		"lat": -20.16663857,
		"lng": 57.49999385,
		"pop": 371953.5,
		"iso2": "MU",
		"iso3": "MUS",
		"prov": ""
	},
	{
		"city": "Gomez Palacio",
		"lat": 25.57005292,
		"lng": -103.5000238,
		"pop": 313952.5,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Durango"
	},
	{
		"city": "Reynosa",
		"lat": 26.07999595,
		"lng": -98.30003117,
		"pop": 458997,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Tamaulipas"
	},
	{
		"city": "Irapuato",
		"lat": 20.67001609,
		"lng": -101.4999909,
		"pop": 339554,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Guanajuato"
	},
	{
		"city": "Celaya",
		"lat": 20.53002464,
		"lng": -100.8000078,
		"pop": 344799,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Guanajuato"
	},
	{
		"city": "Nezahualcoyotl",
		"lat": 19.41001548,
		"lng": -99.02998661,
		"pop": 929681.5,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "México"
	},
	{
		"city": "Xalapa",
		"lat": 19.52998232,
		"lng": -96.91998621,
		"pop": 438667,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Veracruz"
	},
	{
		"city": "Mazatlan",
		"lat": 29.01710349,
		"lng": -110.1333399,
		"pop": 469217,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Sonora"
	},
	{
		"city": "Morelia",
		"lat": 19.73338076,
		"lng": -101.189493,
		"pop": 618551.5,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Michoacán"
	},
	{
		"city": "Pachuca",
		"lat": 20.17043418,
		"lng": -98.73003076,
		"pop": 310861,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Hidalgo"
	},
	{
		"city": "Toluca",
		"lat": 19.3303821,
		"lng": -99.66999923,
		"pop": 1018440.5,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "México"
	},
	{
		"city": "Saltillo",
		"lat": 25.41995872,
		"lng": -101.0049823,
		"pop": 679286.5,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Coahuila"
	},
	{
		"city": "Ciudad Juarez",
		"lat": 31.69037701,
		"lng": -106.4900481,
		"pop": 1343000,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Chihuahua"
	},
	{
		"city": "Durango",
		"lat": 24.03110292,
		"lng": -104.67003,
		"pop": 456368.5,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Durango"
	},
	{
		"city": "Aguascalientes",
		"lat": 21.87945992,
		"lng": -102.2904135,
		"pop": 763589.5,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Aguascalientes"
	},
	{
		"city": "Villahermosa",
		"lat": 17.99997235,
		"lng": -92.89997319,
		"pop": 395482.5,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Tabasco"
	},
	{
		"city": "Cuernavaca",
		"lat": 18.92110476,
		"lng": -99.23999964,
		"pop": 591551.5,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Morelos"
	},
	{
		"city": "Queretaro",
		"lat": 20.63001853,
		"lng": -100.3799817,
		"pop": 786392.5,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Querétaro"
	},
	{
		"city": "Mexicali",
		"lat": 32.64998252,
		"lng": -115.4800161,
		"pop": 736138.5,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Baja California"
	},
	{
		"city": "Torreon",
		"lat": 25.57005292,
		"lng": -103.4200029,
		"pop": 834033,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Coahuila"
	},
	{
		"city": "Culiacan",
		"lat": 24.82999473,
		"lng": -107.3799679,
		"pop": 695734.5,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Sinaloa"
	},
	{
		"city": "Hermosillo",
		"lat": 29.09888145,
		"lng": -110.954065,
		"pop": 554373,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Sonora"
	},
	{
		"city": "San Luis Potosi",
		"lat": 22.16997622,
		"lng": -100.9999956,
		"pop": 834852,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "San Luis Potosí"
	},
	{
		"city": "Matamoros",
		"lat": 25.87998232,
		"lng": -97.50000248,
		"pop": 451394.5,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Tamaulipas"
	},
	{
		"city": "Oaxaca",
		"lat": 17.08268984,
		"lng": -96.66994979,
		"pop": 396647,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Oaxaca"
	},
	{
		"city": "Leon",
		"lat": 21.1499868,
		"lng": -101.7000304,
		"pop": 1301313,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Guanajuato"
	},
	{
		"city": "Tijuana",
		"lat": 32.50001752,
		"lng": -117.079996,
		"pop": 1464728.5,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Baja California"
	},
	{
		"city": "Chihuahua",
		"lat": 28.64498151,
		"lng": -106.0849823,
		"pop": 750633.5,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Chihuahua"
	},
	{
		"city": "Mazatlan",
		"lat": 23.22110069,
		"lng": -106.4200007,
		"pop": 361460.5,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Sinaloa"
	},
	{
		"city": "Tampico",
		"lat": 22.30001996,
		"lng": -97.87000574,
		"pop": 578351.5,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Tamaulipas"
	},
	{
		"city": "Acapulco",
		"lat": 16.84999086,
		"lng": -99.91597905,
		"pop": 683860,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Guerrero"
	},
	{
		"city": "Veracruz",
		"lat": 19.17734235,
		"lng": -96.15998092,
		"pop": 573638,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Veracruz"
	},
	{
		"city": "Tuxtla Gutierrez",
		"lat": 16.74999697,
		"lng": -93.1500096,
		"pop": 473719,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Chiapas"
	},
	{
		"city": "Cancun",
		"lat": 21.16995974,
		"lng": -86.83000777,
		"pop": 489452.5,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Quintana Roo"
	},
	{
		"city": "Merida",
		"lat": 20.96663881,
		"lng": -89.61663355,
		"pop": 841087.5,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Yucatán"
	},
	{
		"city": "Guadalajara",
		"lat": 20.67001609,
		"lng": -103.3300342,
		"pop": 2919294.5,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Jalisco"
	},
	{
		"city": "Puebla",
		"lat": 19.04995994,
		"lng": -98.20003727,
		"pop": 1793549.5,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Puebla"
	},
	{
		"city": "Monterrey",
		"lat": 25.66999514,
		"lng": -100.3299848,
		"pop": 2417437,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Nuevo León"
	},
	{
		"city": "Mexico City",
		"lat": 19.44244244,
		"lng": -99.1309882,
		"pop": 14919501,
		"iso2": "MX",
		"iso3": "MEX",
		"prov": "Distrito Federal"
	},
	{
		"city": "Balti",
		"lat": 47.75908612,
		"lng": 27.90531449,
		"pop": 135022.5,
		"iso2": "MD",
		"iso3": "MDA",
		"prov": "Balti"
	},
	{
		"city": "Chisinau",
		"lat": 47.00502362,
		"lng": 28.85771114,
		"pop": 662064,
		"iso2": "MD",
		"iso3": "MDA",
		"prov": "Chisinau"
	},
	{
		"city": "Ulaanbaatar",
		"lat": 47.9166734,
		"lng": 106.9166158,
		"pop": 827306,
		"iso2": "MN",
		"iso3": "MNG",
		"prov": "Ulaanbaatar"
	},
	{
		"city": "Podgorica",
		"lat": 42.46597251,
		"lng": 19.26630692,
		"pop": 141161.5,
		"iso2": "ME",
		"iso3": "MNE",
		"prov": "Podgorica"
	},
	{
		"city": "Ksar El Kebir",
		"lat": 35.02038047,
		"lng": -5.909985801,
		"pop": 207676.5,
		"iso2": "MA",
		"iso3": "MAR",
		"prov": "Tanger - Tétouan"
	},
	{
		"city": "Larache",
		"lat": 35.20042116,
		"lng": -6.160022218,
		"pop": 114688,
		"iso2": "MA",
		"iso3": "MAR",
		"prov": "Tanger - Tétouan"
	},
	{
		"city": "Taza",
		"lat": 34.22037762,
		"lng": -4.019971966,
		"pop": 170761.5,
		"iso2": "MA",
		"iso3": "MAR",
		"prov": "Taza - Al Hoceima - Taounate"
	},
	{
		"city": "Kenitra",
		"lat": 34.27040041,
		"lng": -6.579996583,
		"pop": 459178,
		"iso2": "MA",
		"iso3": "MAR",
		"prov": "Gharb - Chrarda - Béni Hssen"
	},
	{
		"city": "Meknes",
		"lat": 33.90042299,
		"lng": -5.559981325,
		"pop": 621666.5,
		"iso2": "MA",
		"iso3": "MAR",
		"prov": "Meknès - Tafilalet"
	},
	{
		"city": "Tangier",
		"lat": 35.74728701,
		"lng": -5.832703696,
		"pop": 719208,
		"iso2": "MA",
		"iso3": "MAR",
		"prov": "Tanger - Tétouan"
	},
	{
		"city": "Agadir",
		"lat": 30.43998822,
		"lng": -9.620043581,
		"pop": 752031.5,
		"iso2": "MA",
		"iso3": "MAR",
		"prov": "Souss - Massa - Draâ"
	},
	{
		"city": "Oujda",
		"lat": 34.69001304,
		"lng": -1.909971559,
		"pop": 407322,
		"iso2": "MA",
		"iso3": "MAR",
		"prov": "Oriental"
	},
	{
		"city": "Safi",
		"lat": 32.31997683,
		"lng": -9.239989259,
		"pop": 320819.5,
		"iso2": "MA",
		"iso3": "MAR",
		"prov": "Doukkala - Abda"
	},
	{
		"city": "Fez",
		"lat": 34.05459963,
		"lng": -5.000377239,
		"pop": 983445.5,
		"iso2": "MA",
		"iso3": "MAR",
		"prov": "Fès - Boulemane"
	},
	{
		"city": "Rabat",
		"lat": 34.02529909,
		"lng": -6.83613082,
		"pop": 1680376.5,
		"iso2": "MA",
		"iso3": "MAR",
		"prov": "Rabat - Salé - Zemmour - Zaer"
	},
	{
		"city": "Marrakesh",
		"lat": 31.6299931,
		"lng": -7.999987428,
		"pop": 855648,
		"iso2": "MA",
		"iso3": "MAR",
		"prov": "Marrakech - Tensift - Al Haouz"
	},
	{
		"city": "Casablanca",
		"lat": 33.59997622,
		"lng": -7.616367433,
		"pop": 3162954.5,
		"iso2": "MA",
		"iso3": "MAR",
		"prov": "Grand Casablanca"
	},
	{
		"city": "Matola",
		"lat": -25.96959186,
		"lng": 32.46002356,
		"pop": 503368,
		"iso2": "MZ",
		"iso3": "MOZ",
		"prov": "Maputo"
	},
	{
		"city": "Nampula",
		"lat": -15.13604124,
		"lng": 39.29304317,
		"pop": 386185.5,
		"iso2": "MZ",
		"iso3": "MOZ",
		"prov": "Nampula"
	},
	{
		"city": "Beira",
		"lat": -19.82004474,
		"lng": 34.87000565,
		"pop": 507196.5,
		"iso2": "MZ",
		"iso3": "MOZ",
		"prov": "Sofala"
	},
	{
		"city": "Maputo",
		"lat": -25.95527749,
		"lng": 32.58916296,
		"pop": 1318806.5,
		"iso2": "MZ",
		"iso3": "MOZ",
		"prov": "Maputo"
	},
	{
		"city": "Mawlamyine",
		"lat": 16.50042564,
		"lng": 97.67004838,
		"pop": 400249,
		"iso2": "MM",
		"iso3": "MMR",
		"prov": "Mon"
	},
	{
		"city": "Mandalay",
		"lat": 21.96998842,
		"lng": 96.08502885,
		"pop": 1167000,
		"iso2": "MM",
		"iso3": "MMR",
		"prov": "Mandalay"
	},
	{
		"city": "Naypyidaw",
		"lat": 19.76655703,
		"lng": 96.11861853,
		"pop": 562412,
		"iso2": "MM",
		"iso3": "MMR",
		"prov": "Mandalay"
	},
	{
		"city": "Rangoon",
		"lat": 16.7833541,
		"lng": 96.16667761,
		"pop": 3694910,
		"iso2": "MM",
		"iso3": "MMR",
		"prov": "Yangon"
	},
	{
		"city": "Kathmandu",
		"lat": 27.71669191,
		"lng": 85.31664221,
		"pop": 895000,
		"iso2": "NP",
		"iso3": "NPL",
		"prov": "Bhaktapur"
	},
	{
		"city": "Arnhem",
		"lat": 51.98799603,
		"lng": 5.922999562,
		"pop": 141674,
		"iso2": "NL",
		"iso3": "NLD",
		"prov": "Gelderland"
	},
	{
		"city": "Maastricht",
		"lat": 50.85299707,
		"lng": 5.677002477,
		"pop": 122378,
		"iso2": "NL",
		"iso3": "NLD",
		"prov": "Limburg"
	},
	{
		"city": "Zwolle",
		"lat": 52.52400009,
		"lng": 6.096996529,
		"pop": 111805,
		"iso2": "NL",
		"iso3": "NLD",
		"prov": "Overijssel"
	},
	{
		"city": "'s-Hertogenbosch",
		"lat": 51.68333714,
		"lng": 5.316660485,
		"pop": 134520,
		"iso2": "NL",
		"iso3": "NLD",
		"prov": "Noord-Brabant"
	},
	{
		"city": "Eindhoven",
		"lat": 51.42997316,
		"lng": 5.50001542,
		"pop": 303836.5,
		"iso2": "NL",
		"iso3": "NLD",
		"prov": "Noord-Brabant"
	},
	{
		"city": "Leeuwarden",
		"lat": 53.25037884,
		"lng": 5.783357298,
		"pop": 108601,
		"iso2": "NL",
		"iso3": "NLD",
		"prov": "Friesland"
	},
	{
		"city": "Groningen",
		"lat": 53.22040651,
		"lng": 6.580001179,
		"pop": 198941,
		"iso2": "NL",
		"iso3": "NLD",
		"prov": "Groningen"
	},
	{
		"city": "Utrecht",
		"lat": 52.10034568,
		"lng": 5.120038614,
		"pop": 478224,
		"iso2": "NL",
		"iso3": "NLD",
		"prov": "Utrecht"
	},
	{
		"city": "Haarlem",
		"lat": 52.38043194,
		"lng": 4.629991006,
		"pop": 248773.5,
		"iso2": "NL",
		"iso3": "NLD",
		"prov": "Noord-Holland"
	},
	{
		"city": "Rotterdam",
		"lat": 51.9199691,
		"lng": 4.479974323,
		"pop": 801599.5,
		"iso2": "NL",
		"iso3": "NLD",
		"prov": "Zuid-Holland"
	},
	{
		"city": "The Hague",
		"lat": 52.08003684,
		"lng": 4.269961302,
		"pop": 953862.5,
		"iso2": "NL",
		"iso3": "NLD",
		"prov": "Zuid-Holland"
	},
	{
		"city": "Amsterdam",
		"lat": 52.34996869,
		"lng": 4.916640176,
		"pop": 886318,
		"iso2": "NL",
		"iso3": "NLD",
		"prov": "Noord-Holland"
	},
	{
		"city": "Manukau",
		"lat": -36.99997801,
		"lng": 174.8849735,
		"pop": 336141.5,
		"iso2": "NZ",
		"iso3": "NZL",
		"prov": "Auckland"
	},
	{
		"city": "Auckland",
		"lat": -36.850013,
		"lng": 174.7649808,
		"pop": 759510,
		"iso2": "NZ",
		"iso3": "NZL",
		"prov": "Auckland"
	},
	{
		"city": "Managua",
		"lat": 12.15301658,
		"lng": -86.26849166,
		"pop": 920000,
		"iso2": "NI",
		"iso3": "NIC",
		"prov": "Managua"
	},
	{
		"city": "Niamey",
		"lat": 13.51670595,
		"lng": 2.116656045,
		"pop": 828895.5,
		"iso2": "NE",
		"iso3": "NER",
		"prov": "Niamey"
	},
	{
		"city": "Uyo",
		"lat": 5.007996056,
		"lng": 7.849998524,
		"pop": 495756,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Akwa Ibom"
	},
	{
		"city": "Aba",
		"lat": 5.100397968,
		"lng": 7.34998002,
		"pop": 874385,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Abia"
	},
	{
		"city": "Calabar",
		"lat": 4.960406513,
		"lng": 8.330023558,
		"pop": 354656.5,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Cross River"
	},
	{
		"city": "Abeokuta",
		"lat": 7.160427265,
		"lng": 3.350017455,
		"pop": 441231,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Ogun"
	},
	{
		"city": "Akure",
		"lat": 7.250395934,
		"lng": 5.199982054,
		"pop": 420594,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Ondo"
	},
	{
		"city": "Ikare",
		"lat": 7.530430521,
		"lng": 5.759999551,
		"pop": 899965.5,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Ondo"
	},
	{
		"city": "Ado Ekiti",
		"lat": 7.630372741,
		"lng": 5.219980834,
		"pop": 446749,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Ekiti"
	},
	{
		"city": "Ife",
		"lat": 7.480433572,
		"lng": 4.560021117,
		"pop": 482365,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Osun"
	},
	{
		"city": "Oshogbo",
		"lat": 7.770364196,
		"lng": 4.560021117,
		"pop": 408245,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Osun"
	},
	{
		"city": "Oyo",
		"lat": 7.850436828,
		"lng": 3.929982054,
		"pop": 475016.5,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Oyo"
	},
	{
		"city": "Awka",
		"lat": 6.210433572,
		"lng": 7.06999711,
		"pop": 400828.5,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Anambra"
	},
	{
		"city": "Katsina",
		"lat": 12.99040733,
		"lng": 7.599990599,
		"pop": 432149,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Katsina"
	},
	{
		"city": "Ilorin",
		"lat": 8.490010192,
		"lng": 4.549995889,
		"pop": 701742,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Kwara"
	},
	{
		"city": "Zaria",
		"lat": 11.0799813,
		"lng": 7.710009724,
		"pop": 754836.5,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Kaduna"
	},
	{
		"city": "Jos",
		"lat": 9.929973978,
		"lng": 8.890041055,
		"pop": 737068.5,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Plateau"
	},
	{
		"city": "Benin City",
		"lat": 6.340477314,
		"lng": 5.620008096,
		"pop": 929013,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Edo"
	},
	{
		"city": "Maiduguri",
		"lat": 11.84996014,
		"lng": 13.16001298,
		"pop": 704230,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Borno"
	},
	{
		"city": "Port Harcourt",
		"lat": 4.810002257,
		"lng": 7.010000772,
		"pop": 1020000,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Rivers"
	},
	{
		"city": "Ibadan",
		"lat": 7.380026264,
		"lng": 3.929982054,
		"pop": 2221285,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Oyo"
	},
	{
		"city": "Ogbomosho",
		"lat": 8.130006326,
		"lng": 4.239988972,
		"pop": 595063.5,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Oyo"
	},
	{
		"city": "Warri",
		"lat": 5.519958922,
		"lng": 5.759999551,
		"pop": 683064.5,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Delta"
	},
	{
		"city": "Kaduna",
		"lat": 10.52001548,
		"lng": 7.440000365,
		"pop": 1191296.5,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Kaduna"
	},
	{
		"city": "Enugu",
		"lat": 6.450031351,
		"lng": 7.499996703,
		"pop": 688862,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Enugu"
	},
	{
		"city": "Sokoto",
		"lat": 13.06001548,
		"lng": 5.240031289,
		"pop": 648019.5,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Sokoto"
	},
	{
		"city": "Abuja",
		"lat": 9.083333149,
		"lng": 7.533328002,
		"pop": 869067.5,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Federal Capital Territory"
	},
	{
		"city": "Kano",
		"lat": 11.99997683,
		"lng": 8.5200378,
		"pop": 3140000,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Kano"
	},
	{
		"city": "Lagos",
		"lat": 6.443261653,
		"lng": 3.391531071,
		"pop": 4733768,
		"iso2": "NG",
		"iso3": "NGA",
		"prov": "Lagos"
	},
	{
		"city": "Kaesong",
		"lat": 37.96399925,
		"lng": 126.5644087,
		"pop": 305333.5,
		"iso2": "KP",
		"iso3": "PRK",
		"prov": "Kaesong"
	},
	{
		"city": "Sunchon",
		"lat": 39.42360008,
		"lng": 125.9389689,
		"pop": 400629,
		"iso2": "KP",
		"iso3": "PRK",
		"prov": "P'yongan-namdo"
	},
	{
		"city": "Hungnam",
		"lat": 39.82313641,
		"lng": 127.6231555,
		"pop": 548702,
		"iso2": "KP",
		"iso3": "PRK",
		"prov": "Hamgyong-namdo"
	},
	{
		"city": "Nampo",
		"lat": 38.76692078,
		"lng": 125.4524338,
		"pop": 791000,
		"iso2": "KP",
		"iso3": "PRK",
		"prov": "Namp'o-si"
	},
	{
		"city": "Chongjin",
		"lat": 41.78461875,
		"lng": 129.79,
		"pop": 499807,
		"iso2": "KP",
		"iso3": "PRK",
		"prov": "Hamgyong-bukto"
	},
	{
		"city": "Hamhung",
		"lat": 39.91005617,
		"lng": 127.5454341,
		"pop": 595670.5,
		"iso2": "KP",
		"iso3": "PRK",
		"prov": "Hamgyong-namdo"
	},
	{
		"city": "Wonsan",
		"lat": 39.16048952,
		"lng": 127.4308158,
		"pop": 322425,
		"iso2": "KP",
		"iso3": "PRK",
		"prov": "Kangwon-do"
	},
	{
		"city": "Pyongyang",
		"lat": 39.0194387,
		"lng": 125.7546907,
		"pop": 2899398.5,
		"iso2": "KP",
		"iso3": "PRK",
		"prov": "P'yongyang"
	},
	{
		"city": "Baerum",
		"lat": 59.91348606,
		"lng": 11.34723651,
		"pop": 113659,
		"iso2": "NO",
		"iso3": "NOR",
		"prov": "Akershus"
	},
	{
		"city": "Stavanger",
		"lat": 58.97000389,
		"lng": 5.680004434,
		"pop": 136999,
		"iso2": "NO",
		"iso3": "NOR",
		"prov": "Rogaland"
	},
	{
		"city": "Trondheim",
		"lat": 63.41665753,
		"lng": 10.41666622,
		"pop": 144336,
		"iso2": "NO",
		"iso3": "NOR",
		"prov": "Sør-Trøndelag"
	},
	{
		"city": "Bergen",
		"lat": 60.39100242,
		"lng": 5.324522256,
		"pop": 200389.5,
		"iso2": "NO",
		"iso3": "NOR",
		"prov": "Hordaland"
	},
	{
		"city": "Oslo",
		"lat": 59.91669029,
		"lng": 10.74997921,
		"pop": 707500,
		"iso2": "NO",
		"iso3": "NOR",
		"prov": "Oslo"
	},
	{
		"city": "Muscat",
		"lat": 23.61332481,
		"lng": 58.59331213,
		"pop": 660779,
		"iso2": "OM",
		"iso3": "OMN",
		"prov": "Muscat"
	},
	{
		"city": "Sialkote",
		"lat": 32.5200163,
		"lng": 74.5600378,
		"pop": 477396,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "Punjab"
	},
	{
		"city": "Sheikhu Pura",
		"lat": 31.71998761,
		"lng": 73.98999508,
		"pop": 361303,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "Punjab"
	},
	{
		"city": "Gujrat",
		"lat": 32.5799868,
		"lng": 74.08001542,
		"pop": 301506,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "Punjab"
	},
	{
		"city": "Rahimyar Khan",
		"lat": 28.4202407,
		"lng": 70.29518184,
		"pop": 353203,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "Punjab"
	},
	{
		"city": "Abbottabad",
		"lat": 34.1495034,
		"lng": 73.19950069,
		"pop": 1032323.5,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "N.W.F.P."
	},
	{
		"city": "Mardan",
		"lat": 34.20004295,
		"lng": 72.0399849,
		"pop": 300424,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "N.W.F.P."
	},
	{
		"city": "Jhang",
		"lat": 31.2803762,
		"lng": 72.32498043,
		"pop": 341210,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "Punjab"
	},
	{
		"city": "Sargodha",
		"lat": 32.08536582,
		"lng": 72.6749849,
		"pop": 542603,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "Punjab"
	},
	{
		"city": "Bannu",
		"lat": 32.98897992,
		"lng": 70.59857418,
		"pop": 586209.5,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "N.W.F.P."
	},
	{
		"city": "Faisalabad",
		"lat": 31.40998069,
		"lng": 73.10999711,
		"pop": 2561797.5,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "Punjab"
	},
	{
		"city": "Rawalpindi",
		"lat": 33.59997622,
		"lng": 73.04002722,
		"pop": 1800550.5,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "Punjab"
	},
	{
		"city": "Bahawalpur",
		"lat": 29.38997479,
		"lng": 71.67499426,
		"pop": 552607,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "Punjab"
	},
	{
		"city": "Sukkur",
		"lat": 27.71356549,
		"lng": 68.8485518,
		"pop": 417767,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "Sind"
	},
	{
		"city": "Saidu",
		"lat": 34.75003522,
		"lng": 72.34999182,
		"pop": 1860310,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "N.W.F.P."
	},
	{
		"city": "Gujranwala",
		"lat": 32.16042584,
		"lng": 74.18502193,
		"pop": 1448735.5,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "Punjab"
	},
	{
		"city": "Quetta",
		"lat": 30.22000165,
		"lng": 67.02499385,
		"pop": 750837.5,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "Baluchistan"
	},
	{
		"city": "Larkana",
		"lat": 27.56176597,
		"lng": 68.20678218,
		"pop": 364033,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "Sind"
	},
	{
		"city": "Islamabad",
		"lat": 33.69999595,
		"lng": 73.16663448,
		"pop": 690800,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "F.C.T."
	},
	{
		"city": "Multan",
		"lat": 30.19997703,
		"lng": 71.45500769,
		"pop": 1479615,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "Punjab"
	},
	{
		"city": "Hyderabad",
		"lat": 25.379987,
		"lng": 68.37498897,
		"pop": 1422665,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "Sind"
	},
	{
		"city": "Peshawar",
		"lat": 34.00501609,
		"lng": 71.53500281,
		"pop": 1260886.5,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "N.W.F.P."
	},
	{
		"city": "Lahore",
		"lat": 31.55997154,
		"lng": 74.35002478,
		"pop": 6443944,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "Punjab"
	},
	{
		"city": "Karachi",
		"lat": 24.86999229,
		"lng": 66.99000891,
		"pop": 11877109.5,
		"iso2": "PK",
		"iso3": "PAK",
		"prov": "Sind"
	},
	{
		"city": "Gaza",
		"lat": 31.52999921,
		"lng": 34.44501868,
		"pop": 477460.5,
		"iso2": "PS",
		"iso3": "PSE",
		"prov": ""
	},
	{
		"city": "Panama City",
		"lat": 8.96801719,
		"lng": -79.53303715,
		"pop": 844584,
		"iso2": "PA",
		"iso3": "PAN",
		"prov": "Panama"
	},
	{
		"city": "San Lorenzo",
		"lat": -25.34001788,
		"lng": -57.52003972,
		"pop": 385532,
		"iso2": "PY",
		"iso3": "PRY",
		"prov": "Asunción"
	},
	{
		"city": "Ciudad del Este",
		"lat": -25.51669961,
		"lng": -54.61605676,
		"pop": 320872,
		"iso2": "PY",
		"iso3": "PRY",
		"prov": "Alto Paraná"
	},
	{
		"city": "Asuncion",
		"lat": -25.29640298,
		"lng": -57.64150517,
		"pop": 940846.5,
		"iso2": "PY",
		"iso3": "PRY",
		"prov": "Asunción"
	},
	{
		"city": "Chiclayo",
		"lat": -6.762908916,
		"lng": -79.83658452,
		"pop": 587083.5,
		"iso2": "PE",
		"iso3": "PER",
		"prov": "Lambayeque"
	},
	{
		"city": "Callao",
		"lat": -12.07002684,
		"lng": -77.13496647,
		"pop": 786231.5,
		"iso2": "PE",
		"iso3": "PER",
		"prov": "Lima"
	},
	{
		"city": "Piura",
		"lat": -5.210032126,
		"lng": -80.62997278,
		"pop": 361199,
		"iso2": "PE",
		"iso3": "PER",
		"prov": "Piura"
	},
	{
		"city": "Arequipa",
		"lat": -16.41999388,
		"lng": -71.53001144,
		"pop": 775785,
		"iso2": "PE",
		"iso3": "PER",
		"prov": "Arequipa"
	},
	{
		"city": "Chimbote",
		"lat": -9.070003236,
		"lng": -78.56999516,
		"pop": 333406,
		"iso2": "PE",
		"iso3": "PER",
		"prov": "Ancash"
	},
	{
		"city": "Pucallpa",
		"lat": -8.368909079,
		"lng": -74.53499597,
		"pop": 304917,
		"iso2": "PE",
		"iso3": "PER",
		"prov": "Ucayali"
	},
	{
		"city": "Iquitos",
		"lat": -3.750017884,
		"lng": -73.25000981,
		"pop": 448174.5,
		"iso2": "PE",
		"iso3": "PER",
		"prov": "Loreto"
	},
	{
		"city": "Huancayo",
		"lat": -12.08000039,
		"lng": -75.20001998,
		"pop": 394695,
		"iso2": "PE",
		"iso3": "PER",
		"prov": "Junín"
	},
	{
		"city": "Cusco",
		"lat": -13.52502846,
		"lng": -71.97215499,
		"pop": 336661,
		"iso2": "PE",
		"iso3": "PER",
		"prov": "Cusco"
	},
	{
		"city": "Trujillo",
		"lat": -8.120035381,
		"lng": -79.01996769,
		"pop": 521046,
		"iso2": "PE",
		"iso3": "PER",
		"prov": "La Libertad"
	},
	{
		"city": "Lima",
		"lat": -12.04801268,
		"lng": -77.05006209,
		"pop": 7385117,
		"iso2": "PE",
		"iso3": "PER",
		"prov": "Lima"
	},
	{
		"city": "Quezon City",
		"lat": 14.6504352,
		"lng": 121.0299662,
		"pop": 2761720,
		"iso2": "PH",
		"iso3": "PHL",
		"prov": "Metropolitan Manila"
	},
	{
		"city": "Pasay City",
		"lat": 14.5504413,
		"lng": 120.9999939,
		"pop": 403064,
		"iso2": "PH",
		"iso3": "PHL",
		"prov": "Metropolitan Manila"
	},
	{
		"city": "Iligan",
		"lat": 8.171244119,
		"lng": 124.2153531,
		"pop": 464599,
		"iso2": "PH",
		"iso3": "PHL",
		"prov": "Lanao del Norte"
	},
	{
		"city": "Legazpi",
		"lat": 13.16998293,
		"lng": 123.7500069,
		"pop": 320081,
		"iso2": "PH",
		"iso3": "PHL",
		"prov": "Albay"
	},
	{
		"city": "Bacolod",
		"lat": 10.63168825,
		"lng": 122.9816817,
		"pop": 730587,
		"iso2": "PH",
		"iso3": "PHL",
		"prov": "Negros Occidental"
	},
	{
		"city": "Naga",
		"lat": 13.61915448,
		"lng": 123.1813594,
		"pop": 458283,
		"iso2": "PH",
		"iso3": "PHL",
		"prov": "Camarines Sur"
	},
	{
		"city": "Angeles",
		"lat": 15.14505617,
		"lng": 120.5450862,
		"pop": 314493,
		"iso2": "PH",
		"iso3": "PHL",
		"prov": "Pampanga"
	},
	{
		"city": "Batangas",
		"lat": 13.78167686,
		"lng": 121.021698,
		"pop": 330939,
		"iso2": "PH",
		"iso3": "PHL",
		"prov": "Batangas"
	},
	{
		"city": "Cagayan de Oro",
		"lat": 8.450839456,
		"lng": 124.6852986,
		"pop": 861824.5,
		"iso2": "PH",
		"iso3": "PHL",
		"prov": "Misamis Oriental"
	},
	{
		"city": "Zamboanga",
		"lat": 6.919976826,
		"lng": 122.0800313,
		"pop": 615311.5,
		"iso2": "PH",
		"iso3": "PHL",
		"prov": "Zamboanga del Sur"
	},
	{
		"city": "Baguio City",
		"lat": 16.42999066,
		"lng": 120.5699426,
		"pop": 360269,
		"iso2": "PH",
		"iso3": "PHL",
		"prov": "Benguet"
	},
	{
		"city": "General Santos",
		"lat": 6.110827249,
		"lng": 125.1747261,
		"pop": 744308,
		"iso2": "PH",
		"iso3": "PHL",
		"prov": "South Cotabato"
	},
	{
		"city": "Cebu",
		"lat": 10.31997601,
		"lng": 123.9000752,
		"pop": 806817,
		"iso2": "PH",
		"iso3": "PHL",
		"prov": "Cebu"
	},
	{
		"city": "Iloilo",
		"lat": 10.70504295,
		"lng": 122.5450158,
		"pop": 387681,
		"iso2": "PH",
		"iso3": "PHL",
		"prov": "Iloilo"
	},
	{
		"city": "Davao",
		"lat": 7.110016906,
		"lng": 125.6299955,
		"pop": 1307252,
		"iso2": "PH",
		"iso3": "PHL",
		"prov": "Davao Del Sur"
	},
	{
		"city": "Manila",
		"lat": 14.60415895,
		"lng": 120.9822172,
		"pop": 7088787.5,
		"iso2": "PH",
		"iso3": "PHL",
		"prov": "Metropolitan Manila"
	},
	{
		"city": "Olsztyn",
		"lat": 53.80003522,
		"lng": 20.48003129,
		"pop": 179236.5,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "Warmian-Masurian"
	},
	{
		"city": "Elblag",
		"lat": 54.18995974,
		"lng": 19.40268103,
		"pop": 124332,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "Warmian-Masurian"
	},
	{
		"city": "Bytom",
		"lat": 50.35003908,
		"lng": 18.90999792,
		"pop": 425716.5,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "Silesian"
	},
	{
		"city": "Opole",
		"lat": 50.68497988,
		"lng": 17.93134965,
		"pop": 129544,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "Opole"
	},
	{
		"city": "Koszalin",
		"lat": 54.2,
		"lng": 16.1833333,
		"pop": 107450,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "West Pomeranian"
	},
	{
		"city": "Gdynia",
		"lat": 54.52037884,
		"lng": 18.53002112,
		"pop": 284197,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "Pomeranian"
	},
	{
		"city": "Wroclaw",
		"lat": 51.11043194,
		"lng": 17.03000932,
		"pop": 622471,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "Lower Silesian"
	},
	{
		"city": "Szczecin",
		"lat": 53.42039431,
		"lng": 14.53000688,
		"pop": 390241.5,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "West Pomeranian"
	},
	{
		"city": "Zielona Gora",
		"lat": 51.95040651,
		"lng": 15.50002519,
		"pop": 113865.5,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "Lubusz"
	},
	{
		"city": "Poznan",
		"lat": 52.4057534,
		"lng": 16.89993974,
		"pop": 597174.5,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "Greater Poland"
	},
	{
		"city": "Grudziadz",
		"lat": 53.48039064,
		"lng": 18.75000769,
		"pop": 100964.5,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "Kuyavian-Pomeranian"
	},
	{
		"city": "Bydgoszcz",
		"lat": 53.12041262,
		"lng": 18.01000118,
		"pop": 366222,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "Kuyavian-Pomeranian"
	},
	{
		"city": "Katowice",
		"lat": 50.26038047,
		"lng": 19.02001705,
		"pop": 1527362,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "Silesian"
	},
	{
		"city": "Gliwice",
		"lat": 50.3303762,
		"lng": 18.67001257,
		"pop": 353252.5,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "Silesian"
	},
	{
		"city": "Kielce",
		"lat": 50.8903937,
		"lng": 20.6600203,
		"pop": 212165.5,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "Swietokrzyskie"
	},
	{
		"city": "Bialystok",
		"lat": 53.15035911,
		"lng": 23.1699963,
		"pop": 288722.5,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "Podlachian"
	},
	{
		"city": "Lublin",
		"lat": 51.25039756,
		"lng": 22.57272009,
		"pop": 358001,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "Lublin"
	},
	{
		"city": "Rzeszow",
		"lat": 50.07046958,
		"lng": 22.00004187,
		"pop": 202034,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "Subcarpathian"
	},
	{
		"city": "Lodz",
		"lat": 51.77499086,
		"lng": 19.45136023,
		"pop": 758000,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "Lódz"
	},
	{
		"city": "Gdansk",
		"lat": 54.3599752,
		"lng": 18.64004024,
		"pop": 597915,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "Pomeranian"
	},
	{
		"city": "Krakow",
		"lat": 50.05997927,
		"lng": 19.96001135,
		"pop": 755525,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "Lesser Poland"
	},
	{
		"city": "Warsaw",
		"lat": 52.25000063,
		"lng": 20.99999955,
		"pop": 1704569.5,
		"iso2": "PL",
		"iso3": "POL",
		"prov": "Masovian"
	},
	{
		"city": "Braga",
		"lat": 41.55499453,
		"lng": -8.421331219,
		"pop": 504326,
		"iso2": "PT",
		"iso3": "PRT",
		"prov": "Braga"
	},
	{
		"city": "Setubal",
		"lat": 38.52995953,
		"lng": -8.900010011,
		"pop": 117542,
		"iso2": "PT",
		"iso3": "PRT",
		"prov": "Lisboa"
	},
	{
		"city": "Porto",
		"lat": 41.15000633,
		"lng": -8.620001263,
		"pop": 793316.5,
		"iso2": "PT",
		"iso3": "PRT",
		"prov": "Porto"
	},
	{
		"city": "Lisbon",
		"lat": 38.72272288,
		"lng": -9.144866305,
		"pop": 1664901,
		"iso2": "PT",
		"iso3": "PRT",
		"prov": "Lisboa"
	},
	{
		"city": "San Juan",
		"lat": 18.44002301,
		"lng": -66.12997929,
		"pop": 1437115.5,
		"iso2": "PR",
		"iso3": "PRI",
		"prov": ""
	},
	{
		"city": "Doha",
		"lat": 25.28655601,
		"lng": 51.53296789,
		"pop": 1090655,
		"iso2": "QA",
		"iso3": "QAT",
		"prov": "Ad Dawhah"
	},
	{
		"city": "Satu Mare",
		"lat": 47.79199816,
		"lng": 22.88500248,
		"pop": 112490,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Satu Mare"
	},
	{
		"city": "Rimnicu Vilcea",
		"lat": 45.10999804,
		"lng": 24.38299862,
		"pop": 107558,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Vâlcea"
	},
	{
		"city": "Piatra-Neamt",
		"lat": 46.94000405,
		"lng": 26.38299657,
		"pop": 102688,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Neamt"
	},
	{
		"city": "Braila",
		"lat": 45.29199615,
		"lng": 27.96900354,
		"pop": 213569,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Braila"
	},
	{
		"city": "Drobeta-Turnu Severin",
		"lat": 44.64589113,
		"lng": 22.6658927,
		"pop": 104462,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Mehedinti"
	},
	{
		"city": "Arad",
		"lat": 46.17000999,
		"lng": 21.31998002,
		"pop": 159338,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Arad"
	},
	{
		"city": "Oradea",
		"lat": 47.04998212,
		"lng": 21.91999508,
		"pop": 210222,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Bihor"
	},
	{
		"city": "Sibiu",
		"lat": 45.79711285,
		"lng": 24.13712073,
		"pop": 153729.5,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Sibiu"
	},
	{
		"city": "Buzau",
		"lat": 45.15650596,
		"lng": 26.80651851,
		"pop": 130826,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Buzau"
	},
	{
		"city": "Galati",
		"lat": 45.45589337,
		"lng": 28.04587439,
		"pop": 302621.5,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Galati"
	},
	{
		"city": "Craiova",
		"lat": 44.3262724,
		"lng": 23.82587357,
		"pop": 301143.5,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Dolj"
	},
	{
		"city": "Timisoara",
		"lat": 45.75882062,
		"lng": 21.22344844,
		"pop": 309575,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Timis"
	},
	{
		"city": "Botosani",
		"lat": 47.74841494,
		"lng": 26.65965409,
		"pop": 113359,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Botosani"
	},
	{
		"city": "Baia Mare",
		"lat": 47.65945396,
		"lng": 23.57906693,
		"pop": 134630,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Maramures"
	},
	{
		"city": "Tirgu Mures",
		"lat": 46.55820335,
		"lng": 24.55781856,
		"pop": 148148,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Mures"
	},
	{
		"city": "Pitesti",
		"lat": 44.85631757,
		"lng": 24.87583533,
		"pop": 169345,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Arges"
	},
	{
		"city": "Brasov",
		"lat": 45.64753542,
		"lng": 25.6071602,
		"pop": 293566,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Brasov"
	},
	{
		"city": "Ploiesti",
		"lat": 44.94690635,
		"lng": 26.036488,
		"pop": 230696.5,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Prahova"
	},
	{
		"city": "Bacau",
		"lat": 46.57843467,
		"lng": 26.91963822,
		"pop": 185532,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Bacau"
	},
	{
		"city": "Cluj-Napoca",
		"lat": 46.78842185,
		"lng": 23.5984456,
		"pop": 299444.5,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Cluj"
	},
	{
		"city": "Constanta",
		"lat": 44.20266237,
		"lng": 28.60997432,
		"pop": 285112.5,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Constanta"
	},
	{
		"city": "Iasi",
		"lat": 47.16834698,
		"lng": 27.57494706,
		"pop": 325914,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Iasi"
	},
	{
		"city": "Bucharest",
		"lat": 44.4333718,
		"lng": 26.09994665,
		"pop": 1842097,
		"iso2": "RO",
		"iso3": "ROU",
		"prov": "Bucharest"
	},
	{
		"city": "Naberezhnyye Chelny",
		"lat": 55.69999676,
		"lng": 52.31994828,
		"pop": 461086,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Tatarstan"
	},
	{
		"city": "Vladikavkaz",
		"lat": 43.05038129,
		"lng": 44.66997595,
		"pop": 341000,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "North Ossetia"
	},
	{
		"city": "Kaluga",
		"lat": 54.52037884,
		"lng": 36.27002356,
		"pop": 313733.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Kaluga"
	},
	{
		"city": "Volzhskiy",
		"lat": 48.79481101,
		"lng": 44.77436234,
		"pop": 306022.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Volgograd"
	},
	{
		"city": "Saransk",
		"lat": 54.17037437,
		"lng": 45.18002234,
		"pop": 303304.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Mordovia"
	},
	{
		"city": "Yoshkar Ola",
		"lat": 56.63539187,
		"lng": 47.87494828,
		"pop": 301753,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Mariy-El"
	},
	{
		"city": "Tolyatti",
		"lat": 53.48039064,
		"lng": 49.53004106,
		"pop": 648622,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Samara"
	},
	{
		"city": "Kursk",
		"lat": 51.73998008,
		"lng": 36.19002844,
		"pop": 398742,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Kursk"
	},
	{
		"city": "Tula",
		"lat": 54.19995913,
		"lng": 37.62994055,
		"pop": 479155.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Tula"
	},
	{
		"city": "Kurgan",
		"lat": 55.45995974,
		"lng": 65.34499304,
		"pop": 329399.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Kurgan"
	},
	{
		"city": "Cheboksary",
		"lat": 56.12997052,
		"lng": 47.25002519,
		"pop": 444027.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Chuvash"
	},
	{
		"city": "Makhachkala",
		"lat": 42.98002382,
		"lng": 47.49998409,
		"pop": 526470,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Dagestan"
	},
	{
		"city": "Ivanovo",
		"lat": 57.01002016,
		"lng": 41.00999263,
		"pop": 417527,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Ivanovo"
	},
	{
		"city": "Lipetsk",
		"lat": 52.62000389,
		"lng": 39.63999874,
		"pop": 502144,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Lipetsk"
	},
	{
		"city": "Orel",
		"lat": 52.96995668,
		"lng": 36.06998409,
		"pop": 329376,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Orel"
	},
	{
		"city": "Belgorod",
		"lat": 50.62999615,
		"lng": 36.5999259,
		"pop": 328004.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Belgorod"
	},
	{
		"city": "Vladimir",
		"lat": 56.12997052,
		"lng": 40.4099259,
		"pop": 314336,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Vladimir"
	},
	{
		"city": "Izhevsk",
		"lat": 56.85002993,
		"lng": 53.23002193,
		"pop": 611230,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Udmurt"
	},
	{
		"city": "Stavropol",
		"lat": 45.05000083,
		"lng": 41.98001094,
		"pop": 350795.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Stavropol'"
	},
	{
		"city": "Kaliningrad",
		"lat": 54.70000612,
		"lng": 20.49734289,
		"pop": 403226.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Kaliningrad"
	},
	{
		"city": "Pskov",
		"lat": 57.82999595,
		"lng": 28.32993974,
		"pop": 189979.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Pskov"
	},
	{
		"city": "Bryansk",
		"lat": 53.25999066,
		"lng": 34.42998083,
		"pop": 426510,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Bryansk"
	},
	{
		"city": "Smolensk",
		"lat": 54.78268841,
		"lng": 32.04733557,
		"pop": 311954.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Smolensk"
	},
	{
		"city": "Tver",
		"lat": 56.85997764,
		"lng": 35.88999508,
		"pop": 382043,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Tver'"
	},
	{
		"city": "Yaroslavl",
		"lat": 57.61998293,
		"lng": 39.87001054,
		"pop": 571154,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Yaroslavl'"
	},
	{
		"city": "Rostov",
		"lat": 47.23464785,
		"lng": 39.7126558,
		"pop": 1032567,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Rostov"
	},
	{
		"city": "Sochi",
		"lat": 43.59001243,
		"lng": 39.72996741,
		"pop": 326639,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Krasnodar"
	},
	{
		"city": "Krasnodar",
		"lat": 45.01997683,
		"lng": 39.0000378,
		"pop": 601191.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Krasnodar"
	},
	{
		"city": "Penza",
		"lat": 53.18002138,
		"lng": 44.99998165,
		"pop": 491943,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Penza"
	},
	{
		"city": "Ryazan",
		"lat": 54.61995933,
		"lng": 39.71999385,
		"pop": 502373,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Ryazan'"
	},
	{
		"city": "Voronezh",
		"lat": 51.72998069,
		"lng": 39.26999548,
		"pop": 569734.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Voronezh"
	},
	{
		"city": "Magnitogorsk",
		"lat": 53.42269391,
		"lng": 58.98000688,
		"pop": 308724.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Chelyabinsk"
	},
	{
		"city": "Chelyabinsk",
		"lat": 55.15499127,
		"lng": 61.43866817,
		"pop": 1018802,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Chelyabinsk"
	},
	{
		"city": "Kirov",
		"lat": 58.59005292,
		"lng": 49.66998083,
		"pop": 457410,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Kirov"
	},
	{
		"city": "Nizhny Tagil",
		"lat": 57.9200163,
		"lng": 59.9749849,
		"pop": 374343.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Sverdlovsk"
	},
	{
		"city": "Astrakhan",
		"lat": 46.34865541,
		"lng": 48.05498897,
		"pop": 493363.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Astrakhan'"
	},
	{
		"city": "Orenburg",
		"lat": 51.77997764,
		"lng": 55.11001054,
		"pop": 530820.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Orenburg"
	},
	{
		"city": "Saratov",
		"lat": 51.57998985,
		"lng": 46.0299963,
		"pop": 814586.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Saratov"
	},
	{
		"city": "Ulyanovsk",
		"lat": 54.32997703,
		"lng": 48.41000606,
		"pop": 571553.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Ul'yanovsk"
	},
	{
		"city": "Omsk",
		"lat": 54.98998842,
		"lng": 73.39995357,
		"pop": 1089201.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Omsk"
	},
	{
		"city": "Tyumen",
		"lat": 57.14001223,
		"lng": 65.52999467,
		"pop": 460952,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Tyumen'"
	},
	{
		"city": "Novokuznetsk",
		"lat": 53.75001243,
		"lng": 87.11498205,
		"pop": 530325.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Kemerovo"
	},
	{
		"city": "Kemerovo",
		"lat": 55.33996706,
		"lng": 86.08998002,
		"pop": 470684.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Kemerovo"
	},
	{
		"city": "Ulan Ude",
		"lat": 51.82498781,
		"lng": 107.6249963,
		"pop": 354127,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Buryat"
	},
	{
		"city": "Khabarovsk",
		"lat": 48.4549868,
		"lng": 135.1200105,
		"pop": 562705.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Khabarovsk"
	},
	{
		"city": "Tomsk",
		"lat": 56.494987,
		"lng": 84.97500932,
		"pop": 471950,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Tomsk"
	},
	{
		"city": "Nizhny Novgorod",
		"lat": 56.33300722,
		"lng": 44.00009436,
		"pop": 1246463,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Nizhegorod"
	},
	{
		"city": "Volgograd",
		"lat": 48.71000999,
		"lng": 44.49996049,
		"pop": 801827.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Volgograd"
	},
	{
		"city": "Ufa",
		"lat": 54.78997479,
		"lng": 56.04003129,
		"pop": 969378,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Bashkortostan"
	},
	{
		"city": "Yekaterinburg",
		"lat": 56.85002993,
		"lng": 60.59995967,
		"pop": 1270488,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Sverdlovsk"
	},
	{
		"city": "Samara",
		"lat": 53.19500755,
		"lng": 50.15129512,
		"pop": 996595,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Samara"
	},
	{
		"city": "Kazan",
		"lat": 55.74994204,
		"lng": 49.12634477,
		"pop": 1013635,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Tatarstan"
	},
	{
		"city": "Surgut",
		"lat": 61.25994163,
		"lng": 73.42501664,
		"pop": 353351.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Khanty-Mansiy"
	},
	{
		"city": "Barnaul",
		"lat": 53.35499778,
		"lng": 83.74500688,
		"pop": 569711,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Altay"
	},
	{
		"city": "Novosibirsk",
		"lat": 55.02996014,
		"lng": 82.96004187,
		"pop": 1213100.5,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Novosibirsk"
	},
	{
		"city": "Irkutsk",
		"lat": 52.31997052,
		"lng": 104.2450476,
		"pop": 572325,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Irkutsk"
	},
	{
		"city": "Krasnoyarsk",
		"lat": 56.01398277,
		"lng": 92.86600053,
		"pop": 613605,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Krasnoyarsk"
	},
	{
		"city": "Vladivostok",
		"lat": 43.13001467,
		"lng": 131.9100256,
		"pop": 586617,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Primor'ye"
	},
	{
		"city": "Perm",
		"lat": 57.99995974,
		"lng": 56.24999263,
		"pop": 924154,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Perm'"
	},
	{
		"city": "St. Petersburg",
		"lat": 59.93901451,
		"lng": 30.31602006,
		"pop": 4023106,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "City of St. Petersburg"
	},
	{
		"city": "Moscow",
		"lat": 55.75216412,
		"lng": 37.61552283,
		"pop": 10452000,
		"iso2": "RU",
		"iso3": "RUS",
		"prov": "Moskva"
	},
	{
		"city": "Kigali",
		"lat": -1.953590069,
		"lng": 30.06053178,
		"pop": 802630.5,
		"iso2": "RW",
		"iso3": "RWA",
		"prov": "Kigali City"
	},
	{
		"city": "At Taif",
		"lat": 21.26222801,
		"lng": 40.38227901,
		"pop": 594065,
		"iso2": "SA",
		"iso3": "SAU",
		"prov": "Makkah"
	},
	{
		"city": "Najran",
		"lat": 17.50653994,
		"lng": 44.1315592,
		"pop": 314091,
		"iso2": "SA",
		"iso3": "SAU",
		"prov": "Najran"
	},
	{
		"city": "Al Hillah",
		"lat": 23.4894564,
		"lng": 46.75636023,
		"pop": 594605,
		"iso2": "SA",
		"iso3": "SAU",
		"prov": "Ar Riyad"
	},
	{
		"city": "Buraydah",
		"lat": 26.36638674,
		"lng": 43.96283565,
		"pop": 394958.5,
		"iso2": "SA",
		"iso3": "SAU",
		"prov": "Al Quassim"
	},
	{
		"city": "Hail",
		"lat": 27.52357709,
		"lng": 41.70007971,
		"pop": 385257,
		"iso2": "SA",
		"iso3": "SAU",
		"prov": "Ha'il"
	},
	{
		"city": "Ad Damman",
		"lat": 26.42819175,
		"lng": 50.09967037,
		"pop": 1411656,
		"iso2": "SA",
		"iso3": "SAU",
		"prov": "Ash Sharqiyah"
	},
	{
		"city": "Al Hufuf",
		"lat": 25.3487486,
		"lng": 49.58559322,
		"pop": 518694.5,
		"iso2": "SA",
		"iso3": "SAU",
		"prov": "Ash Sharqiyah"
	},
	{
		"city": "Medina",
		"lat": 24.49998903,
		"lng": 39.5800024,
		"pop": 1010000,
		"iso2": "SA",
		"iso3": "SAU",
		"prov": "Al Madinah"
	},
	{
		"city": "Tabuk",
		"lat": 28.38383465,
		"lng": 36.55496741,
		"pop": 501703.5,
		"iso2": "SA",
		"iso3": "SAU",
		"prov": "Tabuk"
	},
	{
		"city": "Jeddah",
		"lat": 21.51688946,
		"lng": 39.21919755,
		"pop": 2939723,
		"iso2": "SA",
		"iso3": "SAU",
		"prov": "Makkah"
	},
	{
		"city": "Makkah",
		"lat": 21.43002138,
		"lng": 39.82003943,
		"pop": 1354312,
		"iso2": "SA",
		"iso3": "SAU",
		"prov": "Makkah"
	},
	{
		"city": "Riyadh",
		"lat": 24.64083315,
		"lng": 46.77274166,
		"pop": 4335480.5,
		"iso2": "SA",
		"iso3": "SAU",
		"prov": "Ar Riyad"
	},
	{
		"city": "Dakar",
		"lat": 14.71583173,
		"lng": -17.47313013,
		"pop": 2540200,
		"iso2": "SN",
		"iso3": "SEN",
		"prov": "Dakar"
	},
	{
		"city": "Kragujevac",
		"lat": 44.01996035,
		"lng": 20.92000443,
		"pop": 159335,
		"iso2": "RS",
		"iso3": "SRB",
		"prov": "Šumadijski"
	},
	{
		"city": "Pec",
		"lat": 43.88973574,
		"lng": 20.33011796,
		"pop": 137332.5,
		"iso2": "RS",
		"iso3": "SRB",
		"prov": "Moravicki"
	},
	{
		"city": "Nis",
		"lat": 43.33041587,
		"lng": 21.8999963,
		"pop": 230444,
		"iso2": "RS",
		"iso3": "SRB",
		"prov": "Nišavski"
	},
	{
		"city": "Novi Sad",
		"lat": 45.2503762,
		"lng": 19.84994055,
		"pop": 220428.5,
		"iso2": "RS",
		"iso3": "SRB",
		"prov": "Južno-Backi"
	},
	{
		"city": "Belgrade",
		"lat": 44.81864545,
		"lng": 20.46799068,
		"pop": 1099000,
		"iso2": "RS",
		"iso3": "SRB",
		"prov": "Grad Beograd"
	},
	{
		"city": "Freetown",
		"lat": 8.470011412,
		"lng": -13.23421574,
		"pop": 420384,
		"iso2": "SL",
		"iso3": "SLE",
		"prov": "Western"
	},
	{
		"city": "Singapore",
		"lat": 1.293033466,
		"lng": 103.8558207,
		"pop": 4236614.5,
		"iso2": "SG",
		"iso3": "SGP",
		"prov": ""
	},
	{
		"city": "Kosice",
		"lat": 48.73044802,
		"lng": 21.25001013,
		"pop": 210316.5,
		"iso2": "SK",
		"iso3": "SVK",
		"prov": "Košický"
	},
	{
		"city": "Bratislava",
		"lat": 48.15001833,
		"lng": 17.11698075,
		"pop": 398712,
		"iso2": "SK",
		"iso3": "SVK",
		"prov": "Bratislavský"
	},
	{
		"city": "Maribor",
		"lat": 46.54047833,
		"lng": 15.65004187,
		"pop": 101642,
		"iso2": "SI",
		"iso3": "SVN",
		"prov": "Maribor"
	},
	{
		"city": "Ljubljana",
		"lat": 46.05528831,
		"lng": 14.51496903,
		"pop": 284961,
		"iso2": "SI",
		"iso3": "SVN",
		"prov": "Osrednjeslovenska"
	},
	{
		"city": "Mogadishu",
		"lat": 2.066681334,
		"lng": 45.36667761,
		"pop": 987694,
		"iso2": "SO",
		"iso3": "SOM",
		"prov": "Banaadir"
	},
	{
		"city": "Hargeysa",
		"lat": 9.560022399,
		"lng": 44.06531002,
		"pop": 362447,
		"iso2": -99,
		"iso3": "SOL",
		"prov": ""
	},
	{
		"city": "Benoni",
		"lat": -26.14958087,
		"lng": 28.32993974,
		"pop": 1795672,
		"iso2": "ZA",
		"iso3": "ZAF",
		"prov": "Gauteng"
	},
	{
		"city": "Vereeniging",
		"lat": -26.64960203,
		"lng": 27.95998816,
		"pop": 774340.5,
		"iso2": "ZA",
		"iso3": "ZAF",
		"prov": "Gauteng"
	},
	{
		"city": "Pietermaritzburg",
		"lat": -29.61004148,
		"lng": 30.39002071,
		"pop": 620898,
		"iso2": "ZA",
		"iso3": "ZAF",
		"prov": "KwaZulu-Natal"
	},
	{
		"city": "East London",
		"lat": -32.97004311,
		"lng": 27.87001949,
		"pop": 338627,
		"iso2": "ZA",
		"iso3": "ZAF",
		"prov": "Eastern Cape"
	},
	{
		"city": "Bloemfontein",
		"lat": -29.11999388,
		"lng": 26.22991288,
		"pop": 459866.5,
		"iso2": "ZA",
		"iso3": "ZAF",
		"prov": "Orange Free State"
	},
	{
		"city": "Pretoria",
		"lat": -25.70692055,
		"lng": 28.22942908,
		"pop": 1338000,
		"iso2": "ZA",
		"iso3": "ZAF",
		"prov": "Gauteng"
	},
	{
		"city": "Port Elizabeth",
		"lat": -33.97003375,
		"lng": 25.60002885,
		"pop": 830527,
		"iso2": "ZA",
		"iso3": "ZAF",
		"prov": "Eastern Cape"
	},
	{
		"city": "Durban",
		"lat": -29.865013,
		"lng": 30.98001054,
		"pop": 2729000,
		"iso2": "ZA",
		"iso3": "ZAF",
		"prov": "KwaZulu-Natal"
	},
	{
		"city": "Johannesburg",
		"lat": -26.17004474,
		"lng": 28.03000972,
		"pop": 2730734.5,
		"iso2": "ZA",
		"iso3": "ZAF",
		"prov": "Gauteng"
	},
	{
		"city": "Cape Town",
		"lat": -33.92001097,
		"lng": 18.43498816,
		"pop": 2823929,
		"iso2": "ZA",
		"iso3": "ZAF",
		"prov": "Western Cape"
	},
	{
		"city": "Cheongju",
		"lat": 36.64389895,
		"lng": 127.5011991,
		"pop": 719420.5,
		"iso2": "KR",
		"iso3": "KOR",
		"prov": "Chungcheongbuk-do"
	},
	{
		"city": "Ansan",
		"lat": 37.34806785,
		"lng": 126.8595328,
		"pop": 695110.5,
		"iso2": "KR",
		"iso3": "KOR",
		"prov": "Gyeonggi-do"
	},
	{
		"city": "Masan",
		"lat": 35.21910219,
		"lng": 128.583562,
		"pop": 1081499,
		"iso2": "KR",
		"iso3": "KOR",
		"prov": "Gyeongsangnam-do"
	},
	{
		"city": "Yeosu",
		"lat": 34.73678021,
		"lng": 127.7458353,
		"pop": 302142,
		"iso2": "KR",
		"iso3": "KOR",
		"prov": "Gwangju"
	},
	{
		"city": "Jeju",
		"lat": 33.51013674,
		"lng": 126.5219307,
		"pop": 361258,
		"iso2": "KR",
		"iso3": "KOR",
		"prov": "Jeju"
	},
	{
		"city": "Jeonju",
		"lat": 35.83141624,
		"lng": 127.1403942,
		"pop": 679948.5,
		"iso2": "KR",
		"iso3": "KOR",
		"prov": "Jeollabuk-do"
	},
	{
		"city": "Puch'on",
		"lat": 37.4988889,
		"lng": 126.7830556,
		"pop": 866000,
		"iso2": "KR",
		"iso3": "KOR",
		"prov": "Gyeonggi-do"
	},
	{
		"city": "Songnam",
		"lat": 37.4386111,
		"lng": 127.1377778,
		"pop": 986967.5,
		"iso2": "KR",
		"iso3": "KOR",
		"prov": "Gyeonggi-do"
	},
	{
		"city": "Goyang",
		"lat": 37.65273586,
		"lng": 126.8372485,
		"pop": 903000,
		"iso2": "KR",
		"iso3": "KOR",
		"prov": "Gyeonggi-do"
	},
	{
		"city": "Suwon",
		"lat": 37.25778912,
		"lng": 127.0108931,
		"pop": 1078000,
		"iso2": "KR",
		"iso3": "KOR",
		"prov": "Gyeonggi-do"
	},
	{
		"city": "Pohang",
		"lat": 36.02086204,
		"lng": 129.3715242,
		"pop": 435266,
		"iso2": "KR",
		"iso3": "KOR",
		"prov": "Daegu"
	},
	{
		"city": "Ulsan",
		"lat": 35.54673077,
		"lng": 129.3169539,
		"pop": 1011932.5,
		"iso2": "KR",
		"iso3": "KOR",
		"prov": "Ulsan"
	},
	{
		"city": "Daegu",
		"lat": 35.86678876,
		"lng": 128.6069714,
		"pop": 2460000,
		"iso2": "KR",
		"iso3": "KOR",
		"prov": "Taegu-gwangyoksi"
	},
	{
		"city": "Incheon",
		"lat": 37.47614789,
		"lng": 126.6422334,
		"pop": 2550000,
		"iso2": "KR",
		"iso3": "KOR",
		"prov": "Inch'on-gwangyoksi"
	},
	{
		"city": "Daejeon",
		"lat": 36.33554567,
		"lng": 127.425028,
		"pop": 1458165,
		"iso2": "KR",
		"iso3": "KOR",
		"prov": "Daejeon"
	},
	{
		"city": "Gwangju",
		"lat": 35.1709656,
		"lng": 126.9104341,
		"pop": 1428469,
		"iso2": "KR",
		"iso3": "KOR",
		"prov": "Kwangju-gwangyoksi"
	},
	{
		"city": "Busan",
		"lat": 35.09505292,
		"lng": 129.0100476,
		"pop": 3480000,
		"iso2": "KR",
		"iso3": "KOR",
		"prov": "Busan"
	},
	{
		"city": "Seoul",
		"lat": 37.5663491,
		"lng": 126.999731,
		"pop": 9796000,
		"iso2": "KR",
		"iso3": "KOR",
		"prov": "Seoul"
	},
	{
		"city": "Marbella",
		"lat": 36.51661989,
		"lng": -4.88333012,
		"pop": 153069.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Andalucía"
	},
	{
		"city": "Algeciras",
		"lat": 36.12671215,
		"lng": -5.466530363,
		"pop": 106687.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Andalucía"
	},
	{
		"city": "Leon",
		"lat": 42.57997072,
		"lng": -5.570006553,
		"pop": 135014,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Castilla y León"
	},
	{
		"city": "Mataro",
		"lat": 41.53995668,
		"lng": 2.45002071,
		"pop": 149826,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Cataluña"
	},
	{
		"city": "Gijon",
		"lat": 43.53001609,
		"lng": -5.670000449,
		"pop": 303712,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Principado de Asturias"
	},
	{
		"city": "Vitoria",
		"lat": 42.84998008,
		"lng": -2.669976849,
		"pop": 199109.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "País Vasco"
	},
	{
		"city": "Almeria",
		"lat": 36.83034751,
		"lng": -2.429991497,
		"pop": 152032.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Andalucía"
	},
	{
		"city": "Malaga",
		"lat": 36.7204059,
		"lng": -4.419999228,
		"pop": 539381.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Andalucía"
	},
	{
		"city": "Huelva",
		"lat": 37.25037355,
		"lng": -6.929949383,
		"pop": 119732,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Andalucía"
	},
	{
		"city": "Albacete",
		"lat": 39.00034426,
		"lng": -1.869999839,
		"pop": 127597,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Castilla-La Mancha"
	},
	{
		"city": "Santander",
		"lat": 43.3804645,
		"lng": -3.799985394,
		"pop": 196025.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Cantabria"
	},
	{
		"city": "Salamanca",
		"lat": 40.97040489,
		"lng": -5.670000449,
		"pop": 160456.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Castilla y León"
	},
	{
		"city": "Burgos",
		"lat": 42.35039817,
		"lng": -3.67996688,
		"pop": 150251,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Castilla y León"
	},
	{
		"city": "Tarragona",
		"lat": 41.12036989,
		"lng": 1.249990599,
		"pop": 107957.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Cataluña"
	},
	{
		"city": "Cartagena",
		"lat": 37.60042971,
		"lng": -0.980028322,
		"pop": 166276.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Región de Murcia"
	},
	{
		"city": "Oviedo",
		"lat": 43.35049217,
		"lng": -5.829990683,
		"pop": 223524.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Principado de Asturias"
	},
	{
		"city": "Badajoz",
		"lat": 38.8804291,
		"lng": -6.96997278,
		"pop": 115638.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Extremadura"
	},
	{
		"city": "Logrono",
		"lat": 42.47036501,
		"lng": -2.429991497,
		"pop": 123918.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "La Rioja"
	},
	{
		"city": "San Sebastian",
		"lat": 43.32039064,
		"lng": -1.979993125,
		"pop": 270498,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "País Vasco"
	},
	{
		"city": "Alicante",
		"lat": 38.3512199,
		"lng": -0.483640721,
		"pop": 296345,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Comunidad Valenciana"
	},
	{
		"city": "Castello",
		"lat": 39.97041424,
		"lng": -0.05000757,
		"pop": 176360,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Comunidad Valenciana"
	},
	{
		"city": "Cadiz",
		"lat": 36.53499086,
		"lng": -6.225005332,
		"pop": 153932.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Andalucía"
	},
	{
		"city": "Granada",
		"lat": 37.16497825,
		"lng": -3.585011435,
		"pop": 313269,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Andalucía"
	},
	{
		"city": "Murcia",
		"lat": 37.9799931,
		"lng": -1.12996749,
		"pop": 368322.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Región de Murcia"
	},
	{
		"city": "La Coruna",
		"lat": 43.32997662,
		"lng": -8.419987632,
		"pop": 306614.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Galicia"
	},
	{
		"city": "Ourense",
		"lat": 42.32996014,
		"lng": -7.869995363,
		"pop": 113095,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Galicia"
	},
	{
		"city": "Pamplona",
		"lat": 42.82000775,
		"lng": -1.649987428,
		"pop": 233855.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Comunidad Foral de Navarra"
	},
	{
		"city": "Valladolid",
		"lat": 41.65000165,
		"lng": -4.750030763,
		"pop": 299373.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Castilla y León"
	},
	{
		"city": "Melilla",
		"lat": 35.30000165,
		"lng": -2.950011435,
		"pop": 107384,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Melilla"
	},
	{
		"city": "Palma",
		"lat": 39.57426271,
		"lng": 2.65424597,
		"pop": 319951,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Islas Baleares"
	},
	{
		"city": "Zaragoza",
		"lat": 41.65000165,
		"lng": -0.889982138,
		"pop": 548955.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Aragón"
	},
	{
		"city": "Cordoba",
		"lat": 37.87999921,
		"lng": -4.770003704,
		"pop": 300512,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Andalucía"
	},
	{
		"city": "Vigo",
		"lat": 42.22001853,
		"lng": -8.729994549,
		"pop": 335848.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Galicia"
	},
	{
		"city": "Bilbao",
		"lat": 43.24998151,
		"lng": -2.929986818,
		"pop": 614369.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "País Vasco"
	},
	{
		"city": "Las Palmas",
		"lat": 28.09997601,
		"lng": -15.42999902,
		"pop": 364718,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": ""
	},
	{
		"city": "Seville",
		"lat": 37.40501528,
		"lng": -5.980007366,
		"pop": 957533,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Andalucía"
	},
	{
		"city": "Valencia",
		"lat": 39.48501752,
		"lng": -0.400012046,
		"pop": 806652,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Comunidad Valenciana"
	},
	{
		"city": "Barcelona",
		"lat": 41.38329958,
		"lng": 2.183370319,
		"pop": 3250797.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Cataluña"
	},
	{
		"city": "Madrid",
		"lat": 40.40002626,
		"lng": -3.683351686,
		"pop": 2808718.5,
		"iso2": "ES",
		"iso3": "ESP",
		"prov": "Comunidad de Madrid"
	},
	{
		"city": "Medani",
		"lat": 14.39995953,
		"lng": 33.52001054,
		"pop": 308540.5,
		"iso2": "SD",
		"iso3": "SDN",
		"prov": "Gezira"
	},
	{
		"city": "Omdurman",
		"lat": 15.61668113,
		"lng": 32.48002234,
		"pop": 2289428.5,
		"iso2": "SD",
		"iso3": "SDN",
		"prov": "Khartoum"
	},
	{
		"city": "El Obeid",
		"lat": 13.18328961,
		"lng": 30.21669796,
		"pop": 331367.5,
		"iso2": "SD",
		"iso3": "SDN",
		"prov": "North Kurdufan"
	},
	{
		"city": "Port Sudan",
		"lat": 19.61579103,
		"lng": 37.21642574,
		"pop": 489725,
		"iso2": "SD",
		"iso3": "SDN",
		"prov": "Red Sea"
	},
	{
		"city": "Niyala",
		"lat": 12.05997316,
		"lng": 24.88999467,
		"pop": 392373,
		"iso2": "SD",
		"iso3": "SDN",
		"prov": "South Darfur"
	},
	{
		"city": "Kassala",
		"lat": 15.45997235,
		"lng": 36.39001623,
		"pop": 370499,
		"iso2": "SD",
		"iso3": "SDN",
		"prov": "Kassala"
	},
	{
		"city": "Khartoum",
		"lat": 15.58807823,
		"lng": 32.53417924,
		"pop": 3364323.5,
		"iso2": "SD",
		"iso3": "SDN",
		"prov": "Khartoum"
	},
	{
		"city": "Vasteraas",
		"lat": 59.63001528,
		"lng": 16.54001339,
		"pop": 100186.5,
		"iso2": "SE",
		"iso3": "SWE",
		"prov": "Västmanland"
	},
	{
		"city": "Uppsala",
		"lat": 59.86005292,
		"lng": 17.63999792,
		"pop": 130425.5,
		"iso2": "SE",
		"iso3": "SWE",
		"prov": "Uppsala"
	},
	{
		"city": "Goteborg",
		"lat": 57.75000083,
		"lng": 12.0000321,
		"pop": 520940.5,
		"iso2": "SE",
		"iso3": "SWE",
		"prov": "Västra Götaland"
	},
	{
		"city": "Malmo",
		"lat": 55.58333722,
		"lng": 13.03330237,
		"pop": 265448.5,
		"iso2": "SE",
		"iso3": "SWE",
		"prov": "Skåne"
	},
	{
		"city": "Stockholm",
		"lat": 59.35075995,
		"lng": 18.09733473,
		"pop": 1258654.5,
		"iso2": "SE",
		"iso3": "SWE",
		"prov": "Stockholm"
	},
	{
		"city": "Luzern",
		"lat": 47.05042137,
		"lng": 8.280000772,
		"pop": 163745.5,
		"iso2": "CH",
		"iso3": "CHE",
		"prov": "Lucerne"
	},
	{
		"city": "Lausanne",
		"lat": 46.53042727,
		"lng": 6.650022744,
		"pop": 191226.5,
		"iso2": "CH",
		"iso3": "CHE",
		"prov": "Vaud"
	},
	{
		"city": "Basel",
		"lat": 47.58038902,
		"lng": 7.590017048,
		"pop": 500317.5,
		"iso2": "CH",
		"iso3": "CHE",
		"prov": "Basel-Stadt"
	},
	{
		"city": "Bern",
		"lat": 46.91668276,
		"lng": 7.466975462,
		"pop": 198480,
		"iso2": "CH",
		"iso3": "CHE",
		"prov": "Bern"
	},
	{
		"city": "Zurich",
		"lat": 47.37998781,
		"lng": 8.55001013,
		"pop": 724865,
		"iso2": "CH",
		"iso3": "CHE",
		"prov": "Zürich"
	},
	{
		"city": "Geneva",
		"lat": 46.21000755,
		"lng": 6.140028034,
		"pop": 716192.5,
		"iso2": "CH",
		"iso3": "CHE",
		"prov": "Genève"
	},
	{
		"city": "Al Ladhiqiyah",
		"lat": 35.539987,
		"lng": 35.77997595,
		"pop": 439664,
		"iso2": "SY",
		"iso3": "SYR",
		"prov": "Lattakia (Al Ladhiqiyah)"
	},
	{
		"city": "Duma",
		"lat": 33.5833364,
		"lng": 36.39998979,
		"pop": 406912,
		"iso2": "SY",
		"iso3": "SYR",
		"prov": "Damascus"
	},
	{
		"city": "Hamah",
		"lat": 35.1503467,
		"lng": 36.72999548,
		"pop": 439796,
		"iso2": "SY",
		"iso3": "SYR",
		"prov": "Hamah"
	},
	{
		"city": "Hims",
		"lat": 34.72995892,
		"lng": 36.72002193,
		"pop": 890202,
		"iso2": "SY",
		"iso3": "SYR",
		"prov": "Homs (Hims)"
	},
	{
		"city": "Aleppo",
		"lat": 36.22997072,
		"lng": 37.1700203,
		"pop": 2170132,
		"iso2": "SY",
		"iso3": "SYR",
		"prov": "Aleppo (Halab)"
	},
	{
		"city": "Damascus",
		"lat": 33.500034,
		"lng": 36.29999589,
		"pop": 2466000,
		"iso2": "SY",
		"iso3": "SYR",
		"prov": "Damascus"
	},
	{
		"city": "Taoyuan",
		"lat": 24.98888889,
		"lng": 121.3111111,
		"pop": 451007,
		"iso2": "TW",
		"iso3": "TWN",
		"prov": "Taoyuan"
	},
	{
		"city": "Zhongli",
		"lat": 24.96502525,
		"lng": 121.2167765,
		"pop": 1001193,
		"iso2": "TW",
		"iso3": "TWN",
		"prov": "Taoyuan"
	},
	{
		"city": "Keelung",
		"lat": 25.13325787,
		"lng": 121.7332824,
		"pop": 443603.5,
		"iso2": "TW",
		"iso3": "TWN",
		"prov": "Keelung City"
	},
	{
		"city": "Changhua",
		"lat": 24.07340008,
		"lng": 120.5134086,
		"pop": 493294,
		"iso2": "TW",
		"iso3": "TWN",
		"prov": "Changhua"
	},
	{
		"city": "Chiayi",
		"lat": 23.47545209,
		"lng": 120.4350671,
		"pop": 387106,
		"iso2": "TW",
		"iso3": "TWN",
		"prov": "Chiayi City"
	},
	{
		"city": "Hsinchu",
		"lat": 24.8167914,
		"lng": 120.9767395,
		"pop": 582778.5,
		"iso2": "TW",
		"iso3": "TWN",
		"prov": "Hsinchu City"
	},
	{
		"city": "Pingtung",
		"lat": 22.68170209,
		"lng": 120.4816792,
		"pop": 359752.5,
		"iso2": "TW",
		"iso3": "TWN",
		"prov": "Pingtung"
	},
	{
		"city": "New Taipei",
		"lat": 25.01277778,
		"lng": 121.465,
		"pop": 2821870,
		"iso2": "TW",
		"iso3": "TWN",
		"prov": "New Taipei City"
	},
	{
		"city": "Tainan",
		"lat": 23.00000307,
		"lng": 120.2000427,
		"pop": 1319156,
		"iso2": "TW",
		"iso3": "TWN",
		"prov": "Tainan City"
	},
	{
		"city": "Taichung",
		"lat": 24.15207745,
		"lng": 120.681667,
		"pop": 1835024,
		"iso2": "TW",
		"iso3": "TWN",
		"prov": "Taichung City"
	},
	{
		"city": "Kaohsiung",
		"lat": 22.63330711,
		"lng": 120.2666019,
		"pop": 2144391.5,
		"iso2": "TW",
		"iso3": "TWN",
		"prov": "Kaohsiung City"
	},
	{
		"city": "Taipei",
		"lat": 25.03583333,
		"lng": 121.5683333,
		"pop": 4759522.5,
		"iso2": "TW",
		"iso3": "TWN",
		"prov": "Taipei City"
	},
	{
		"city": "Dushanbe",
		"lat": 38.56003522,
		"lng": 68.77387935,
		"pop": 882822,
		"iso2": "TJ",
		"iso3": "TJK",
		"prov": "Tadzhikistan Territories"
	},
	{
		"city": "Moshi",
		"lat": -3.339603659,
		"lng": 37.33998409,
		"pop": 463873,
		"iso2": "TZ",
		"iso3": "TZA",
		"prov": "Kilimanjaro"
	},
	{
		"city": "Mwanza",
		"lat": -2.520015443,
		"lng": 32.93002071,
		"pop": 465372.5,
		"iso2": "TZ",
		"iso3": "TZA",
		"prov": "Mwanza"
	},
	{
		"city": "Arusha",
		"lat": -3.36001585,
		"lng": 36.66999914,
		"pop": 330605,
		"iso2": "TZ",
		"iso3": "TZA",
		"prov": "Arusha"
	},
	{
		"city": "Zanzibar",
		"lat": -6.159999981,
		"lng": 39.20002559,
		"pop": 388439,
		"iso2": "TZ",
		"iso3": "TZA",
		"prov": "Zanzibar West"
	},
	{
		"city": "Dar es Salaam",
		"lat": -6.800012595,
		"lng": 39.26834184,
		"pop": 2814326,
		"iso2": "TZ",
		"iso3": "TZA",
		"prov": "Dar-Es-Salaam"
	},
	{
		"city": "Samut Prakan",
		"lat": 13.60690716,
		"lng": 100.6114709,
		"pop": 388920,
		"iso2": "TH",
		"iso3": "THA",
		"prov": "Samut Prakan"
	},
	{
		"city": "Bangkok",
		"lat": 13.74999921,
		"lng": 100.5166447,
		"pop": 5904238,
		"iso2": "TH",
		"iso3": "THA",
		"prov": "Bangkok Metropolis"
	},
	{
		"city": "Lome",
		"lat": 6.131937072,
		"lng": 1.222757119,
		"pop": 1100850,
		"iso2": "TG",
		"iso3": "TGO",
		"prov": "Maritime"
	},
	{
		"city": "Bizerte",
		"lat": 37.29042279,
		"lng": 9.854995075,
		"pop": 127555.5,
		"iso2": "TN",
		"iso3": "TUN",
		"prov": "Bizerte"
	},
	{
		"city": "Nabeul",
		"lat": 36.46034426,
		"lng": 10.7300321,
		"pop": 115149,
		"iso2": "TN",
		"iso3": "TUN",
		"prov": "Nabeul"
	},
	{
		"city": "Gafsa",
		"lat": 34.42044293,
		"lng": 8.780021931,
		"pop": 104017.5,
		"iso2": "TN",
		"iso3": "TUN",
		"prov": "Gafsa"
	},
	{
		"city": "Qairouan",
		"lat": 35.68039187,
		"lng": 10.09999304,
		"pop": 132158,
		"iso2": "TN",
		"iso3": "TUN",
		"prov": "Kairouan"
	},
	{
		"city": "Sfax",
		"lat": 34.75003522,
		"lng": 10.72000688,
		"pop": 365164,
		"iso2": "TN",
		"iso3": "TUN",
		"prov": "Sfax"
	},
	{
		"city": "Sousse",
		"lat": 35.82999514,
		"lng": 10.62502559,
		"pop": 245563.5,
		"iso2": "TN",
		"iso3": "TUN",
		"prov": "Sousse"
	},
	{
		"city": "Tunis",
		"lat": 36.80277814,
		"lng": 10.1796781,
		"pop": 1570476.5,
		"iso2": "TN",
		"iso3": "TUN",
		"prov": "Tunis"
	},
	{
		"city": "Aydin",
		"lat": 37.8499752,
		"lng": 27.85002071,
		"pop": 180939.5,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Aydin"
	},
	{
		"city": "Kahramanmaras",
		"lat": 37.60998985,
		"lng": 36.94502112,
		"pop": 374745.5,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "K. Maras"
	},
	{
		"city": "Icel",
		"lat": 36.79998761,
		"lng": 34.61999508,
		"pop": 577416,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Mersin"
	},
	{
		"city": "Balikesir",
		"lat": 39.6503821,
		"lng": 27.89001827,
		"pop": 249833.5,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Balikesir"
	},
	{
		"city": "Edirne",
		"lat": 41.67043968,
		"lng": 26.56999548,
		"pop": 114424,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Edirne"
	},
	{
		"city": "Tekirdag",
		"lat": 40.99086875,
		"lng": 27.50998979,
		"pop": 108266,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Tekirdag"
	},
	{
		"city": "Kocaeli",
		"lat": 40.77602399,
		"lng": 29.93061723,
		"pop": 383557.5,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Kocaeli"
	},
	{
		"city": "Denizli",
		"lat": 37.77039349,
		"lng": 29.08002315,
		"pop": 342791,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Denizli"
	},
	{
		"city": "Manisa",
		"lat": 38.63039268,
		"lng": 27.43996822,
		"pop": 237700,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Manisa"
	},
	{
		"city": "Malatya",
		"lat": 38.37043439,
		"lng": 38.30002885,
		"pop": 451689.5,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Malatya"
	},
	{
		"city": "Tarsus",
		"lat": 36.9203937,
		"lng": 34.87997921,
		"pop": 566297,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Mersin"
	},
	{
		"city": "Hatay",
		"lat": 36.2303583,
		"lng": 36.12000688,
		"pop": 305564,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Hatay"
	},
	{
		"city": "Erzurum",
		"lat": 39.92039146,
		"lng": 41.29002722,
		"pop": 391804,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Erzurum"
	},
	{
		"city": "Diyarbakir",
		"lat": 37.92043601,
		"lng": 40.23004024,
		"pop": 640586.5,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Diyarbakir"
	},
	{
		"city": "Van",
		"lat": 38.49543968,
		"lng": 43.39997595,
		"pop": 326262,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Van"
	},
	{
		"city": "Trabzon",
		"lat": 40.97999086,
		"lng": 39.71999385,
		"pop": 497556.5,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Trabzon"
	},
	{
		"city": "Sanliurfa",
		"lat": 37.16999086,
		"lng": 38.79498572,
		"pop": 431407.5,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Sanliurfa"
	},
	{
		"city": "Eskisehir",
		"lat": 39.7949986,
		"lng": 30.52996049,
		"pop": 490644.5,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Eskisehir"
	},
	{
		"city": "Antalya",
		"lat": 36.88998212,
		"lng": 30.69997595,
		"pop": 703468.5,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Antalya"
	},
	{
		"city": "Kayseri",
		"lat": 38.73495994,
		"lng": 35.49001949,
		"pop": 562215.5,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Kayseri"
	},
	{
		"city": "Gaziantep",
		"lat": 37.07498374,
		"lng": 37.38499426,
		"pop": 943262,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Gaziantep"
	},
	{
		"city": "Izmir",
		"lat": 38.43614968,
		"lng": 27.15179401,
		"pop": 2454909,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Izmir"
	},
	{
		"city": "Bursa",
		"lat": 40.1999868,
		"lng": 29.06999792,
		"pop": 1425544.5,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Bursa"
	},
	{
		"city": "Samsun",
		"lat": 41.27999839,
		"lng": 36.34366247,
		"pop": 573722.5,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Samsun"
	},
	{
		"city": "Konya",
		"lat": 37.87501243,
		"lng": 32.47500972,
		"pop": 718680,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Konya"
	},
	{
		"city": "Adana",
		"lat": 36.99498863,
		"lng": 35.32000403,
		"pop": 1245445,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Adana"
	},
	{
		"city": "Ankara",
		"lat": 39.92723859,
		"lng": 32.86439164,
		"pop": 3511689.5,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Ankara"
	},
	{
		"city": "Istanbul",
		"lat": 41.10499615,
		"lng": 29.01000159,
		"pop": 10003305,
		"iso2": "TR",
		"iso3": "TUR",
		"prov": "Istanbul"
	},
	{
		"city": "Ashgabat",
		"lat": 37.94999493,
		"lng": 58.38329911,
		"pop": 652841,
		"iso2": "TM",
		"iso3": "TKM",
		"prov": "Ahal"
	},
	{
		"city": "Kampala",
		"lat": 0.316658955,
		"lng": 32.58332353,
		"pop": 1386594.5,
		"iso2": "UG",
		"iso3": "UGA",
		"prov": "Kampala"
	},
	{
		"city": "Mykolayiv",
		"lat": 46.96773907,
		"lng": 31.984342,
		"pop": 352917.5,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Mykolayiv"
	},
	{
		"city": "Khmelnytskyy",
		"lat": 49.42492759,
		"lng": 27.00154537,
		"pop": 322093,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Khmel'nyts'kyy"
	},
	{
		"city": "Kamyanets-Podilskyy",
		"lat": 48.68430096,
		"lng": 26.58089921,
		"pop": 107329,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Khmel'nyts'kyy"
	},
	{
		"city": "Drohobych",
		"lat": 49.34436403,
		"lng": 23.49938188,
		"pop": 101837.5,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "L'viv"
	},
	{
		"city": "Uzhgorod",
		"lat": 48.62998903,
		"lng": 22.25000077,
		"pop": 134355,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Transcarpathia"
	},
	{
		"city": "Kryvyy Rih",
		"lat": 47.92832644,
		"lng": 33.34498246,
		"pop": 571643.5,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Dnipropetrovs'k"
	},
	{
		"city": "Makiyivka",
		"lat": 48.02966392,
		"lng": 37.97462235,
		"pop": 318882.5,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Donets'k"
	},
	{
		"city": "Horlivka",
		"lat": 48.29964744,
		"lng": 38.05466915,
		"pop": 337717.5,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Donets'k"
	},
	{
		"city": "Simferopol",
		"lat": 44.94915428,
		"lng": 34.0987349,
		"pop": 305882.5,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Crimea"
	},
	{
		"city": "Rivne",
		"lat": 50.61658612,
		"lng": 26.25280554,
		"pop": 253261,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Rivne"
	},
	{
		"city": "Chernivtsi",
		"lat": 48.30530601,
		"lng": 25.92155961,
		"pop": 267250.5,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Chernivtsi"
	},
	{
		"city": "Ivano-Frankivsk",
		"lat": 48.93475079,
		"lng": 24.70938554,
		"pop": 222719.5,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Ivano-Frankivs'k"
	},
	{
		"city": "Ternopil",
		"lat": 49.53598024,
		"lng": 25.5821488,
		"pop": 240222,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Ternopil'"
	},
	{
		"city": "Lutsk",
		"lat": 50.7471983,
		"lng": 25.33337846,
		"pop": 211980,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Volyn"
	},
	{
		"city": "Vinnytsya",
		"lat": 49.22537905,
		"lng": 28.48155839,
		"pop": 349627,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Vinnytsya"
	},
	{
		"city": "Luhansk",
		"lat": 48.56976015,
		"lng": 39.33438432,
		"pop": 408931,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Luhans'k"
	},
	{
		"city": "Poltava",
		"lat": 49.57403994,
		"lng": 34.57028235,
		"pop": 302217.5,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Poltava"
	},
	{
		"city": "Zaporizhzhya",
		"lat": 47.85729718,
		"lng": 35.17680863,
		"pop": 600778.5,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Zaporizhzhya"
	},
	{
		"city": "Mariupol",
		"lat": 47.09618085,
		"lng": 37.55619828,
		"pop": 416435,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Donets'k"
	},
	{
		"city": "Lvov",
		"lat": 49.83498008,
		"lng": 24.02999548,
		"pop": 760841.5,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "L'viv"
	},
	{
		"city": "Odessa",
		"lat": 46.4900163,
		"lng": 30.71000118,
		"pop": 847500.5,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Odessa"
	},
	{
		"city": "Zhytomyr",
		"lat": 50.24557517,
		"lng": 28.66216752,
		"pop": 278581,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Zhytomyr"
	},
	{
		"city": "Dnipropetrovsk",
		"lat": 48.47997235,
		"lng": 35.00002356,
		"pop": 949424.5,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Dnipropetrovs'k"
	},
	{
		"city": "Donetsk",
		"lat": 48.00000165,
		"lng": 37.82998002,
		"pop": 874137.5,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Donets'k"
	},
	{
		"city": "Kharkiv",
		"lat": 49.99998293,
		"lng": 36.25002478,
		"pop": 1338063.5,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Kharkiv"
	},
	{
		"city": "Sevastapol",
		"lat": 44.59997662,
		"lng": 33.46497514,
		"pop": 346832.5,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Crimea"
	},
	{
		"city": "Kiev",
		"lat": 50.43336733,
		"lng": 30.51662797,
		"pop": 2185754,
		"iso2": "UA",
		"iso3": "UKR",
		"prov": "Kiev"
	},
	{
		"city": "Sharjah",
		"lat": 25.37138287,
		"lng": 55.40647823,
		"pop": 952015.5,
		"iso2": "AE",
		"iso3": "ARE",
		"prov": "Sharjah"
	},
	{
		"city": "Al Ayn",
		"lat": 24.2304706,
		"lng": 55.73999792,
		"pop": 352500.5,
		"iso2": "AE",
		"iso3": "ARE",
		"prov": "Abu Dhabi"
	},
	{
		"city": "Abu Dhabi",
		"lat": 24.46668357,
		"lng": 54.36659338,
		"pop": 581861,
		"iso2": "AE",
		"iso3": "ARE",
		"prov": "Abu Dhabi"
	},
	{
		"city": "Dubai",
		"lat": 25.22999615,
		"lng": 55.27997432,
		"pop": 1258173.5,
		"iso2": "AE",
		"iso3": "ARE",
		"prov": "Dubay"
	},
	{
		"city": "Sunderland",
		"lat": 54.92001853,
		"lng": -1.380029746,
		"pop": 315449.5,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Tyne and Wear"
	},
	{
		"city": "Southampton",
		"lat": 50.90003135,
		"lng": -1.399976849,
		"pop": 384417,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Southampton"
	},
	{
		"city": "Bristol",
		"lat": 51.44999778,
		"lng": -2.583315472,
		"pop": 492120.5,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Bristol"
	},
	{
		"city": "Bournemouth",
		"lat": 50.72999005,
		"lng": -1.900049684,
		"pop": 295272.5,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Bournemouth"
	},
	{
		"city": "Swansea",
		"lat": 51.6299868,
		"lng": -3.950002077,
		"pop": 232611,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Swansea"
	},
	{
		"city": "Southend",
		"lat": 51.55001752,
		"lng": 0.71999711,
		"pop": 395993,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Southend-on-Sea"
	},
	{
		"city": "Reading",
		"lat": 51.46997072,
		"lng": -0.980028322,
		"pop": 257752,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Oxfordshire"
	},
	{
		"city": "Leicester",
		"lat": 52.62997744,
		"lng": -1.133248943,
		"pop": 398611,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Leicester"
	},
	{
		"city": "Bradford",
		"lat": 53.80003522,
		"lng": -1.749981325,
		"pop": 397708.5,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "West Yorkshire"
	},
	{
		"city": "Sheffield",
		"lat": 53.36667666,
		"lng": -1.499996583,
		"pop": 922800,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "South Yorkshire"
	},
	{
		"city": "Aberdeen",
		"lat": 57.17039797,
		"lng": -2.079987021,
		"pop": 186577,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Aberdeen"
	},
	{
		"city": "Dundee",
		"lat": 56.47038902,
		"lng": -3.000008384,
		"pop": 151013.5,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Dundee"
	},
	{
		"city": "Middlesbrough",
		"lat": 54.58037518,
		"lng": -1.230013063,
		"pop": 279374.5,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Stockton-on-Tees"
	},
	{
		"city": "Coventry",
		"lat": 52.42040367,
		"lng": -1.499996583,
		"pop": 348292,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "West Midlands"
	},
	{
		"city": "Exeter",
		"lat": 50.70040529,
		"lng": -3.529950197,
		"pop": 108242,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Devon"
	},
	{
		"city": "Cambridge",
		"lat": 52.20039125,
		"lng": 0.116623086,
		"pop": 128488,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Cambridgeshire"
	},
	{
		"city": "Kingston upon Hull",
		"lat": 53.75042584,
		"lng": -0.32999048,
		"pop": 297398.5,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Kingston upon Hull"
	},
	{
		"city": "York",
		"lat": 53.97038658,
		"lng": -1.080022218,
		"pop": 151574.5,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "York"
	},
	{
		"city": "Blackpool",
		"lat": 53.83039512,
		"lng": -3.050005332,
		"pop": 207946.5,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Lancashire"
	},
	{
		"city": "Plymouth",
		"lat": 50.38538576,
		"lng": -4.159989259,
		"pop": 239436,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Plymouth"
	},
	{
		"city": "Ipswich",
		"lat": 52.07034751,
		"lng": 1.169995482,
		"pop": 139012,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Suffolk"
	},
	{
		"city": "Norwich",
		"lat": 52.63036501,
		"lng": 1.300013386,
		"pop": 184196,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Norfolk"
	},
	{
		"city": "Brighton",
		"lat": 50.83034568,
		"lng": -0.169974407,
		"pop": 321004.5,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Brighton and Hove"
	},
	{
		"city": "Oxford",
		"lat": 51.7704175,
		"lng": -1.249986004,
		"pop": 173681,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Oxfordshire"
	},
	{
		"city": "Luton",
		"lat": 51.88035911,
		"lng": -0.420010825,
		"pop": 214813.5,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Luton"
	},
	{
		"city": "Portsmouth",
		"lat": 50.80034751,
		"lng": -1.080022218,
		"pop": 323676,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Portsmouth"
	},
	{
		"city": "Peterborough",
		"lat": 52.58041974,
		"lng": -0.249995363,
		"pop": 140141,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Peterborough"
	},
	{
		"city": "Nottingham",
		"lat": 52.97034426,
		"lng": -1.170016725,
		"pop": 565650,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Nottingham"
	},
	{
		"city": "Stoke",
		"lat": 53.00036826,
		"lng": -2.180006756,
		"pop": 325610,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Stoke-on-Trent"
	},
	{
		"city": "Edinburgh",
		"lat": 55.94832786,
		"lng": -3.219090618,
		"pop": 470378.5,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Edinburgh"
	},
	{
		"city": "Newcastle",
		"lat": 55.00037539,
		"lng": -1.59999048,
		"pop": 537191,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Tyne and Wear"
	},
	{
		"city": "Liverpool",
		"lat": 53.41600181,
		"lng": -2.917997886,
		"pop": 639972.5,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Merseyside"
	},
	{
		"city": "Cardiff",
		"lat": 51.49999473,
		"lng": -3.22500757,
		"pop": 603750,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Cardiff"
	},
	{
		"city": "Leeds",
		"lat": 53.83000755,
		"lng": -1.580017539,
		"pop": 992061.5,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "West Yorkshire"
	},
	{
		"city": "Manchester",
		"lat": 53.50041526,
		"lng": -2.247987103,
		"pop": 1312757.5,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Manchester"
	},
	{
		"city": "Birmingham",
		"lat": 52.47497398,
		"lng": -1.919996787,
		"pop": 1634666.5,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "West Midlands"
	},
	{
		"city": "Belfast",
		"lat": 54.60001223,
		"lng": -5.960034425,
		"pop": 362588,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Belfast"
	},
	{
		"city": "Glasgow",
		"lat": 55.87440472,
		"lng": -4.250707236,
		"pop": 885134,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Glasgow"
	},
	{
		"city": "London",
		"lat": 51.49999473,
		"lng": -0.116721844,
		"pop": 7994104.5,
		"iso2": "GB",
		"iso3": "GBR",
		"prov": "Westminster"
	},
	{
		"city": "Glendale",
		"lat": 33.58194114,
		"lng": -112.1958238,
		"pop": 363360.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Arizona"
	},
	{
		"city": "Mesa",
		"lat": 33.42391461,
		"lng": -111.7360844,
		"pop": 762217.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Arizona"
	},
	{
		"city": "Berkeley",
		"lat": 37.87390139,
		"lng": -122.271152,
		"pop": 298257,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "National City",
		"lat": 32.67194501,
		"lng": -117.0980052,
		"pop": 104291,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Riverside",
		"lat": 33.94194501,
		"lng": -117.3980386,
		"pop": 297554,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "San Mateo",
		"lat": 37.55691815,
		"lng": -122.3130616,
		"pop": 361806.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Vallejo",
		"lat": 38.11194887,
		"lng": -122.258052,
		"pop": 133367.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Aurora",
		"lat": 39.69585736,
		"lng": -104.808497,
		"pop": 431966.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Colorado"
	},
	{
		"city": "Greeley",
		"lat": 40.41919822,
		"lng": -104.739974,
		"pop": 106142.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Colorado"
	},
	{
		"city": "Kansas City",
		"lat": 39.11358052,
		"lng": -94.63014638,
		"pop": 324221.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Kansas"
	},
	{
		"city": "Independence",
		"lat": 39.09111391,
		"lng": -94.41528121,
		"pop": 130695,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Missouri"
	},
	{
		"city": "Metairie",
		"lat": 29.98386619,
		"lng": -90.15277653,
		"pop": 270171,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Louisiana"
	},
	{
		"city": "Bryan",
		"lat": 30.67418581,
		"lng": -96.36968388,
		"pop": 108156.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "McAllen",
		"lat": 26.20303754,
		"lng": -98.22972538,
		"pop": 243291,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "Pasadena",
		"lat": 29.66086265,
		"lng": -95.14774296,
		"pop": 388767.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "Grand Prairie",
		"lat": 32.68476076,
		"lng": -97.02023849,
		"pop": 545107.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "Stamford",
		"lat": 41.05334556,
		"lng": -73.53919112,
		"pop": 434781.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Connecticut"
	},
	{
		"city": "Waterbury",
		"lat": 41.55000775,
		"lng": -73.05002202,
		"pop": 174236,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Connecticut"
	},
	{
		"city": "New Bedford",
		"lat": 41.6561253,
		"lng": -70.94469833,
		"pop": 115082.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Massachusetts"
	},
	{
		"city": "Springfield",
		"lat": 42.12002464,
		"lng": -72.57999903,
		"pop": 287003.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Massachusetts"
	},
	{
		"city": "Salem",
		"lat": 42.5224989,
		"lng": -70.88309175,
		"pop": 188982,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Massachusetts"
	},
	{
		"city": "Melbourne",
		"lat": 28.08331036,
		"lng": -80.60832035,
		"pop": 170870,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Florida"
	},
	{
		"city": "Sanford",
		"lat": 28.78995974,
		"lng": -81.27998478,
		"pop": 189374.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Florida"
	},
	{
		"city": "Miami Beach",
		"lat": 25.80991953,
		"lng": -80.13178111,
		"pop": 248538,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Florida"
	},
	{
		"city": "Coral Springs",
		"lat": 26.27083701,
		"lng": -80.27082158,
		"pop": 185548,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Florida"
	},
	{
		"city": "Joliet",
		"lat": 41.52998313,
		"lng": -88.10667403,
		"pop": 362946.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Illinois"
	},
	{
		"city": "Rockford",
		"lat": 42.26970542,
		"lng": -89.06969019,
		"pop": 204371.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Illinois"
	},
	{
		"city": "Evanston",
		"lat": 42.04834943,
		"lng": -87.69995467,
		"pop": 212243,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Illinois"
	},
	{
		"city": "Rock Island",
		"lat": 41.49339622,
		"lng": -90.53461369,
		"pop": 102055.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Illinois"
	},
	{
		"city": "Elgin",
		"lat": 42.03946108,
		"lng": -88.28991866,
		"pop": 244050,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Illinois"
	},
	{
		"city": "South Bend",
		"lat": 41.68330711,
		"lng": -86.25001734,
		"pop": 171791,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Indiana"
	},
	{
		"city": "Elkhart",
		"lat": 41.68294537,
		"lng": -85.96879419,
		"pop": 100295,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Indiana"
	},
	{
		"city": "Durham",
		"lat": 35.99995892,
		"lng": -78.91999964,
		"pop": 257114.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "North Carolina"
	},
	{
		"city": "Barlett",
		"lat": 35.22290041,
		"lng": -89.84109013,
		"pop": 164843.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Tennessee"
	},
	{
		"city": "Hampton",
		"lat": 37.03002525,
		"lng": -76.34994979,
		"pop": 256601.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Virginia"
	},
	{
		"city": "Waukesha",
		"lat": 43.0116498,
		"lng": -88.23136926,
		"pop": 159012,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Wisconsin"
	},
	{
		"city": "Appleton",
		"lat": 44.26867902,
		"lng": -88.40050623,
		"pop": 136888.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Wisconsin"
	},
	{
		"city": "Paterson",
		"lat": 40.91999453,
		"lng": -74.17000533,
		"pop": 151205,
		"iso2": "US",
		"iso3": "USA",
		"prov": "New Jersey"
	},
	{
		"city": "Poughkeepsie",
		"lat": 41.70023114,
		"lng": -73.92141585,
		"pop": 100670.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "New York"
	},
	{
		"city": "Lancaster",
		"lat": 40.03777447,
		"lng": -76.30576644,
		"pop": 209489,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Pennsylvania"
	},
	{
		"city": "Allentown",
		"lat": 40.59998822,
		"lng": -75.50002751,
		"pop": 300980.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Pennsylvania"
	},
	{
		"city": "Rochester",
		"lat": 44.02205324,
		"lng": -92.46968937,
		"pop": 102433,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Minnesota"
	},
	{
		"city": "Lakeville",
		"lat": 44.65010276,
		"lng": -93.24251042,
		"pop": 156151,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Minnesota"
	},
	{
		"city": "Everett",
		"lat": 47.9604175,
		"lng": -122.1999677,
		"pop": 291948,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Washington"
	},
	{
		"city": "Stockton",
		"lat": 37.95813397,
		"lng": -121.289739,
		"pop": 488506.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Pasadena",
		"lat": 34.16038129,
		"lng": -118.1388719,
		"pop": 144618,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Visalia",
		"lat": 36.32502952,
		"lng": -119.3160094,
		"pop": 114699.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Santa Rosa",
		"lat": 38.45040367,
		"lng": -122.6999889,
		"pop": 193455,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Oceanside",
		"lat": 33.2204645,
		"lng": -117.3349675,
		"pop": 396474.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Modesto",
		"lat": 37.65541343,
		"lng": -120.9899899,
		"pop": 269697,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Irvine",
		"lat": 33.68041058,
		"lng": -117.8299502,
		"pop": 1611303.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Palm Springs",
		"lat": 33.77735557,
		"lng": -116.5330526,
		"pop": 216461,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Fort Collins",
		"lat": 40.56068829,
		"lng": -105.0588693,
		"pop": 178818.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Colorado"
	},
	{
		"city": "Pueblo",
		"lat": 38.2803882,
		"lng": -104.6300066,
		"pop": 108244,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Colorado"
	},
	{
		"city": "Boulder",
		"lat": 40.03844627,
		"lng": -105.246093,
		"pop": 106897.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Colorado"
	},
	{
		"city": "Ogden",
		"lat": 41.23237856,
		"lng": -111.9680341,
		"pop": 227774,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Utah"
	},
	{
		"city": "Fayetteville",
		"lat": 36.06297833,
		"lng": -94.15720911,
		"pop": 108267.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Arkansas"
	},
	{
		"city": "Davenport",
		"lat": 41.55398684,
		"lng": -90.58753036,
		"pop": 178282.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Iowa"
	},
	{
		"city": "St. Charles",
		"lat": 38.78428509,
		"lng": -90.50616581,
		"pop": 213139.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Missouri"
	},
	{
		"city": "Columbia",
		"lat": 38.95207847,
		"lng": -92.33390955,
		"pop": 244754,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Missouri"
	},
	{
		"city": "Norman",
		"lat": 35.22791302,
		"lng": -97.34414636,
		"pop": 113525,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Oklahoma"
	},
	{
		"city": "Edinburg",
		"lat": 26.30318646,
		"lng": -98.1599622,
		"pop": 114573.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "Killeen",
		"lat": 31.11728538,
		"lng": -97.72748214,
		"pop": 120464,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "Beaumont",
		"lat": 30.08626304,
		"lng": -94.10168278,
		"pop": 107455.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "Denton",
		"lat": 33.21576194,
		"lng": -97.12883651,
		"pop": 138952.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "New Haven",
		"lat": 41.33038291,
		"lng": -72.90000533,
		"pop": 707883,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Connecticut"
	},
	{
		"city": "Lowell",
		"lat": 42.63368837,
		"lng": -71.31669112,
		"pop": 415074,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Massachusetts"
	},
	{
		"city": "Worcester",
		"lat": 42.27042889,
		"lng": -71.80002079,
		"pop": 232290.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Massachusetts"
	},
	{
		"city": "Manchester",
		"lat": 42.99599184,
		"lng": -71.45528731,
		"pop": 153221.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "New Hampshire"
	},
	{
		"city": "Tuscaloosa",
		"lat": 33.22511538,
		"lng": -87.54417607,
		"pop": 100594.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Alabama"
	},
	{
		"city": "Cape Coral",
		"lat": 26.60290977,
		"lng": -81.97968368,
		"pop": 117387.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Florida"
	},
	{
		"city": "Naples",
		"lat": 26.14205935,
		"lng": -81.79499211,
		"pop": 141902,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Florida"
	},
	{
		"city": "Fort Pierce",
		"lat": 27.44678591,
		"lng": -80.3258053,
		"pop": 132984,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Florida"
	},
	{
		"city": "Kissimmee",
		"lat": 28.29205731,
		"lng": -81.4077806,
		"pop": 144589.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Florida"
	},
	{
		"city": "Fort Lauderdale",
		"lat": 26.13606488,
		"lng": -80.14178552,
		"pop": 1103781.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Florida"
	},
	{
		"city": "Macon",
		"lat": 32.85038373,
		"lng": -83.63004806,
		"pop": 104932.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Georgia"
	},
	{
		"city": "Columbus",
		"lat": 32.47043276,
		"lng": -84.98001734,
		"pop": 202225,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Georgia"
	},
	{
		"city": "Greenville",
		"lat": 34.85292299,
		"lng": -82.3941545,
		"pop": 203256.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "South Carolina"
	},
	{
		"city": "Waukegan",
		"lat": 42.36404075,
		"lng": -87.8447262,
		"pop": 144539,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Illinois"
	},
	{
		"city": "Aurora",
		"lat": 41.76539512,
		"lng": -88.29999557,
		"pop": 273949.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Illinois"
	},
	{
		"city": "Gary",
		"lat": 41.58039349,
		"lng": -87.33000309,
		"pop": 335737,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Indiana"
	},
	{
		"city": "Fort Wayne",
		"lat": 41.08039817,
		"lng": -85.12998234,
		"pop": 264793,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Indiana"
	},
	{
		"city": "Covington",
		"lat": 39.0840084,
		"lng": -84.50859908,
		"pop": 313064.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Kentucky"
	},
	{
		"city": "Fayetteville",
		"lat": 35.06293601,
		"lng": -78.88359359,
		"pop": 184040.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "North Carolina"
	},
	{
		"city": "Asheville",
		"lat": 35.60119773,
		"lng": -82.55414474,
		"pop": 105775,
		"iso2": "US",
		"iso3": "USA",
		"prov": "North Carolina"
	},
	{
		"city": "Winston-Salem",
		"lat": 36.10543052,
		"lng": -80.25999536,
		"pop": 237491.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "North Carolina"
	},
	{
		"city": "Akron",
		"lat": 41.07039878,
		"lng": -81.51999597,
		"pop": 451155,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Ohio"
	},
	{
		"city": "Murfreesboro",
		"lat": 35.84596315,
		"lng": -86.39026717,
		"pop": 100237,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Tennessee"
	},
	{
		"city": "Clarksville",
		"lat": 36.5300816,
		"lng": -87.35943282,
		"pop": 122115,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Tennessee"
	},
	{
		"city": "Alexandria",
		"lat": 38.82043276,
		"lng": -77.09998153,
		"pop": 127273,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Virginia"
	},
	{
		"city": "Roanoke",
		"lat": 37.27119916,
		"lng": -79.94161686,
		"pop": 144669.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Virginia"
	},
	{
		"city": "Racine",
		"lat": 42.72771364,
		"lng": -87.81183415,
		"pop": 105458.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Wisconsin"
	},
	{
		"city": "Wilmington",
		"lat": 39.74626772,
		"lng": -75.54689803,
		"pop": 116205.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Delaware"
	},
	{
		"city": "Newark",
		"lat": 40.70042137,
		"lng": -74.17000533,
		"pop": 280123,
		"iso2": "US",
		"iso3": "USA",
		"prov": "New Jersey"
	},
	{
		"city": "Schenectady",
		"lat": 42.81458173,
		"lng": -73.93996769,
		"pop": 104767.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "New York"
	},
	{
		"city": "Niagara Falls",
		"lat": 43.09482302,
		"lng": -79.0369434,
		"pop": 117567,
		"iso2": "US",
		"iso3": "USA",
		"prov": "New York"
	},
	{
		"city": "York",
		"lat": 39.96292116,
		"lng": -76.72804041,
		"pop": 128798.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Pennsylvania"
	},
	{
		"city": "Scranton",
		"lat": 41.40929283,
		"lng": -75.66267908,
		"pop": 114701,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Pennsylvania"
	},
	{
		"city": "Erie",
		"lat": 42.12992067,
		"lng": -80.08499313,
		"pop": 138991.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Pennsylvania"
	},
	{
		"city": "Ann Arbor",
		"lat": 42.30037539,
		"lng": -83.71999089,
		"pop": 189893,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Michigan"
	},
	{
		"city": "Kalamazoo",
		"lat": 42.29215883,
		"lng": -85.58718958,
		"pop": 128759.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Michigan"
	},
	{
		"city": "Flint",
		"lat": 43.0128642,
		"lng": -83.68753809,
		"pop": 206235,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Michigan"
	},
	{
		"city": "Grand Rapids",
		"lat": 42.96371991,
		"lng": -85.66994938,
		"pop": 361934.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Michigan"
	},
	{
		"city": "Tacoma",
		"lat": 47.21131594,
		"lng": -122.5150131,
		"pop": 460273,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Washington"
	},
	{
		"city": "Long Beach",
		"lat": 33.78696739,
		"lng": -118.1580439,
		"pop": 1249195.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Provo",
		"lat": 40.24889854,
		"lng": -111.63777,
		"pop": 231238,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Utah"
	},
	{
		"city": "Little Rock",
		"lat": 34.73608258,
		"lng": -92.33109318,
		"pop": 227555,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Arkansas"
	},
	{
		"city": "Wichita",
		"lat": 37.71998313,
		"lng": -97.32998702,
		"pop": 378543.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Kansas"
	},
	{
		"city": "Lafayette",
		"lat": 30.19997703,
		"lng": -92.01994938,
		"pop": 135205.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Louisiana"
	},
	{
		"city": "Waco",
		"lat": 31.54917116,
		"lng": -97.14638066,
		"pop": 143157,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "Lubbock",
		"lat": 33.58000327,
		"lng": -101.8799677,
		"pop": 212343.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "Hartford",
		"lat": 41.77002016,
		"lng": -72.67996708,
		"pop": 518509.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Connecticut"
	},
	{
		"city": "Providence",
		"lat": 41.82110231,
		"lng": -71.4149797,
		"pop": 663726.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Rhode Island"
	},
	{
		"city": "Birmingham",
		"lat": 33.53000633,
		"lng": -86.82499516,
		"pop": 670142,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Alabama"
	},
	{
		"city": "Mobile",
		"lat": 30.68002525,
		"lng": -88.04998499,
		"pop": 221870,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Alabama"
	},
	{
		"city": "Pensacola",
		"lat": 30.42112632,
		"lng": -87.21693506,
		"pop": 145319.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Florida"
	},
	{
		"city": "St. Petersburg",
		"lat": 27.77053876,
		"lng": -82.67938257,
		"pop": 523314.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Florida"
	},
	{
		"city": "Springfield",
		"lat": 39.82000999,
		"lng": -89.65001652,
		"pop": 125345,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Illinois"
	},
	{
		"city": "Greensboro",
		"lat": 36.07000633,
		"lng": -79.80002344,
		"pop": 310328,
		"iso2": "US",
		"iso3": "USA",
		"prov": "North Carolina"
	},
	{
		"city": "Dayton",
		"lat": 39.750376,
		"lng": -84.19998743,
		"pop": 466067,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Ohio"
	},
	{
		"city": "Virginia Beach",
		"lat": 36.85321433,
		"lng": -75.97831873,
		"pop": 877475.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Virginia"
	},
	{
		"city": "Madison",
		"lat": 43.07301556,
		"lng": -89.40111699,
		"pop": 276036,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Wisconsin"
	},
	{
		"city": "Green Bay",
		"lat": 44.5299809,
		"lng": -88.00001388,
		"pop": 149811.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Wisconsin"
	},
	{
		"city": "Trenton",
		"lat": 40.2169625,
		"lng": -74.74335535,
		"pop": 225713,
		"iso2": "US",
		"iso3": "USA",
		"prov": "New Jersey"
	},
	{
		"city": "Lansing",
		"lat": 42.73352724,
		"lng": -84.54673629,
		"pop": 198821.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Michigan"
	},
	{
		"city": "Bakersfield",
		"lat": 35.36997154,
		"lng": -119.0199809,
		"pop": 367259,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Oakland",
		"lat": 37.76892071,
		"lng": -122.2211034,
		"pop": 953044,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Lancaster",
		"lat": 34.69804873,
		"lng": -118.135823,
		"pop": 225799,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Salinas",
		"lat": 36.68221702,
		"lng": -121.6416555,
		"pop": 152737.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Eugene",
		"lat": 44.05001019,
		"lng": -123.1000161,
		"pop": 195183,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Oregon"
	},
	{
		"city": "Cedar Rapids",
		"lat": 41.96998212,
		"lng": -91.66002303,
		"pop": 149338.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Iowa"
	},
	{
		"city": "Springfield",
		"lat": 37.18001609,
		"lng": -93.31999923,
		"pop": 180691,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Missouri"
	},
	{
		"city": "Lincoln",
		"lat": 40.81997479,
		"lng": -96.68000086,
		"pop": 244146,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Nebraska"
	},
	{
		"city": "Abilene",
		"lat": 32.4486253,
		"lng": -99.73278609,
		"pop": 108008,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "Brownsville",
		"lat": 25.91997988,
		"lng": -97.50000248,
		"pop": 174707,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "Tyler",
		"lat": 32.35108604,
		"lng": -95.30078272,
		"pop": 101561.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "Huntsville",
		"lat": 34.71995953,
		"lng": -86.60999536,
		"pop": 185474.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Alabama"
	},
	{
		"city": "West Palm Beach",
		"lat": 26.74501996,
		"lng": -80.12362126,
		"pop": 675521.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Florida"
	},
	{
		"city": "Sarasota",
		"lat": 27.33612083,
		"lng": -82.53078699,
		"pop": 321223.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Florida"
	},
	{
		"city": "Daytona Beach",
		"lat": 29.21055422,
		"lng": -81.0230754,
		"pop": 140775.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Florida"
	},
	{
		"city": "Gainesville",
		"lat": 29.65138002,
		"lng": -82.32503727,
		"pop": 158390.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Florida"
	},
	{
		"city": "Ft. Myers",
		"lat": 26.64029767,
		"lng": -81.86049199,
		"pop": 120810.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Florida"
	},
	{
		"city": "Augusta",
		"lat": 33.46081158,
		"lng": -81.98498051,
		"pop": 152895.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Georgia"
	},
	{
		"city": "Charleston",
		"lat": 32.79237693,
		"lng": -79.99210474,
		"pop": 254295,
		"iso2": "US",
		"iso3": "USA",
		"prov": "South Carolina"
	},
	{
		"city": "Peoria",
		"lat": 40.69998212,
		"lng": -89.67004114,
		"pop": 142622,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Illinois"
	},
	{
		"city": "Evansville",
		"lat": 37.97469627,
		"lng": -87.5558291,
		"pop": 144788,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Indiana"
	},
	{
		"city": "Louisville",
		"lat": 38.22501691,
		"lng": -85.74870427,
		"pop": 595819.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Kentucky"
	},
	{
		"city": "Lexington",
		"lat": 38.05001467,
		"lng": -84.50002079,
		"pop": 244972,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Kentucky"
	},
	{
		"city": "Charlotte",
		"lat": 35.20499453,
		"lng": -80.83003809,
		"pop": 943574.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "North Carolina"
	},
	{
		"city": "Youngstown",
		"lat": 41.09969932,
		"lng": -80.64973902,
		"pop": 194765,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Ohio"
	},
	{
		"city": "Canton",
		"lat": 40.79886497,
		"lng": -81.37863509,
		"pop": 168410,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Ohio"
	},
	{
		"city": "Toledo",
		"lat": 41.67002626,
		"lng": -83.57997359,
		"pop": 388449,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Ohio"
	},
	{
		"city": "Columbus",
		"lat": 39.97997438,
		"lng": -82.9900096,
		"pop": 1003418,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Ohio"
	},
	{
		"city": "Chattanooga",
		"lat": 35.06998985,
		"lng": -85.25000086,
		"pop": 206571.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Tennessee"
	},
	{
		"city": "Albany",
		"lat": 42.67001691,
		"lng": -73.81994918,
		"pop": 484286,
		"iso2": "US",
		"iso3": "USA",
		"prov": "New York"
	},
	{
		"city": "Harrisburg",
		"lat": 40.27359987,
		"lng": -76.88474919,
		"pop": 289210,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Pennsylvania"
	},
	{
		"city": "Santa Cruz",
		"lat": 36.97194629,
		"lng": -122.0263904,
		"pop": 101530.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "San Bernardino",
		"lat": 34.12038373,
		"lng": -117.3000342,
		"pop": 973690.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Bridgeport",
		"lat": 41.17997866,
		"lng": -73.19996118,
		"pop": 578545,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Connecticut"
	},
	{
		"city": "Rochester",
		"lat": 43.17042564,
		"lng": -77.61994979,
		"pop": 483177,
		"iso2": "US",
		"iso3": "USA",
		"prov": "New York"
	},
	{
		"city": "St. Paul",
		"lat": 44.94398663,
		"lng": -93.08497481,
		"pop": 509961,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Minnesota"
	},
	{
		"city": "Billings",
		"lat": 45.78830202,
		"lng": -108.5400004,
		"pop": 102151.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Montana"
	},
	{
		"city": "Fargo",
		"lat": 46.8772278,
		"lng": -96.7894257,
		"pop": 127472.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "North Dakota"
	},
	{
		"city": "Olympia",
		"lat": 47.03804486,
		"lng": -122.899434,
		"pop": 100950,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Washington"
	},
	{
		"city": "Spokane",
		"lat": 47.66999595,
		"lng": -117.4199494,
		"pop": 272483.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Washington"
	},
	{
		"city": "Vancouver",
		"lat": 45.63030133,
		"lng": -122.6399925,
		"pop": 343796.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Washington"
	},
	{
		"city": "Tucson",
		"lat": 32.20499676,
		"lng": -110.8899862,
		"pop": 670953.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Arizona"
	},
	{
		"city": "Santa Barbara",
		"lat": 34.43498985,
		"lng": -119.7199899,
		"pop": 135021,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Fresno",
		"lat": 36.7477169,
		"lng": -119.7729841,
		"pop": 540768,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Colorado Springs",
		"lat": 38.86296246,
		"lng": -104.7919863,
		"pop": 427272,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Colorado"
	},
	{
		"city": "Reno",
		"lat": 39.52997601,
		"lng": -119.8200096,
		"pop": 265363.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Nevada"
	},
	{
		"city": "Albuquerque",
		"lat": 35.10497479,
		"lng": -106.6413308,
		"pop": 725723,
		"iso2": "US",
		"iso3": "USA",
		"prov": "New Mexico"
	},
	{
		"city": "Salem",
		"lat": 44.92807029,
		"lng": -123.0238967,
		"pop": 187966,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Oregon"
	},
	{
		"city": "Topeka",
		"lat": 39.05000531,
		"lng": -95.66998499,
		"pop": 126830.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Kansas"
	},
	{
		"city": "Kansas City",
		"lat": 39.10708851,
		"lng": -94.60409422,
		"pop": 955272.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Missouri"
	},
	{
		"city": "Tulsa",
		"lat": 36.12000327,
		"lng": -95.93002079,
		"pop": 669434,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Oklahoma"
	},
	{
		"city": "Sioux Falls",
		"lat": 43.54998903,
		"lng": -96.7299978,
		"pop": 148030,
		"iso2": "US",
		"iso3": "USA",
		"prov": "South Dakota"
	},
	{
		"city": "Shreveport",
		"lat": 32.50001752,
		"lng": -93.77002344,
		"pop": 224099,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Louisiana"
	},
	{
		"city": "Baton Rouge",
		"lat": 30.45794578,
		"lng": -91.14015812,
		"pop": 322710.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Louisiana"
	},
	{
		"city": "Ft. Worth",
		"lat": 32.73997703,
		"lng": -97.34003809,
		"pop": 1090830,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "Corpus Christi",
		"lat": 27.74281435,
		"lng": -97.40189478,
		"pop": 249977.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "Austin",
		"lat": 30.26694969,
		"lng": -97.74277836,
		"pop": 919684,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "Amarillo",
		"lat": 35.22998008,
		"lng": -101.8299966,
		"pop": 178526,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "El Paso",
		"lat": 31.77998395,
		"lng": -106.5099952,
		"pop": 658331,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "Laredo",
		"lat": 27.50613629,
		"lng": -99.50721847,
		"pop": 322768.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "Montgomery",
		"lat": 32.36160219,
		"lng": -86.27918868,
		"pop": 194491.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Alabama"
	},
	{
		"city": "Tallahassee",
		"lat": 30.44998761,
		"lng": -84.28003422,
		"pop": 187402.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Florida"
	},
	{
		"city": "Orlando",
		"lat": 28.50997683,
		"lng": -81.38003036,
		"pop": 778985,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Florida"
	},
	{
		"city": "Jacksonville",
		"lat": 30.33002077,
		"lng": -81.66998682,
		"pop": 904953.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Florida"
	},
	{
		"city": "Savannah",
		"lat": 32.02110618,
		"lng": -81.10999516,
		"pop": 155848.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Georgia"
	},
	{
		"city": "Columbia",
		"lat": 34.0399752,
		"lng": -80.89998214,
		"pop": 257185.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "South Carolina"
	},
	{
		"city": "Indianapolis",
		"lat": 39.74998842,
		"lng": -86.17004806,
		"pop": 1104641.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Indiana"
	},
	{
		"city": "Wilmington",
		"lat": 34.22551943,
		"lng": -77.94502039,
		"pop": 126992,
		"iso2": "US",
		"iso3": "USA",
		"prov": "North Carolina"
	},
	{
		"city": "Knoxville",
		"lat": 35.97001243,
		"lng": -83.92003036,
		"pop": 417137,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Tennessee"
	},
	{
		"city": "Richmond",
		"lat": 37.55001935,
		"lng": -77.449986,
		"pop": 551443,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Virginia"
	},
	{
		"city": "Baltimore",
		"lat": 39.29999005,
		"lng": -76.61998499,
		"pop": 1432946,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Maryland"
	},
	{
		"city": "Syracuse",
		"lat": 43.04999371,
		"lng": -76.15001367,
		"pop": 403873.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "New York"
	},
	{
		"city": "Boise",
		"lat": 43.60859011,
		"lng": -116.2274899,
		"pop": 242029,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Idaho"
	},
	{
		"city": "San Jose",
		"lat": 37.29998293,
		"lng": -121.8499891,
		"pop": 1281471.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Sacramento",
		"lat": 38.57502138,
		"lng": -121.4700381,
		"pop": 1035949,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Las Vegas",
		"lat": 36.20999778,
		"lng": -115.2200061,
		"pop": 1150717,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Nevada"
	},
	{
		"city": "Portland",
		"lat": 45.52002382,
		"lng": -122.6799901,
		"pop": 1207756.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Oregon"
	},
	{
		"city": "Salt Lake City",
		"lat": 40.7750163,
		"lng": -111.9300519,
		"pop": 572013,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Utah"
	},
	{
		"city": "Des Moines",
		"lat": 41.57998008,
		"lng": -93.61998092,
		"pop": 286917.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Iowa"
	},
	{
		"city": "Omaha",
		"lat": 41.24000083,
		"lng": -96.00999007,
		"pop": 643034,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Nebraska"
	},
	{
		"city": "Oklahoma City",
		"lat": 35.47004295,
		"lng": -97.51868351,
		"pop": 660475,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Oklahoma"
	},
	{
		"city": "San Antonio",
		"lat": 29.48733319,
		"lng": -98.50730534,
		"pop": 1364905,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "Jackson",
		"lat": 32.29881533,
		"lng": -90.18499679,
		"pop": 213799,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Mississippi"
	},
	{
		"city": "Raleigh",
		"lat": 35.81878135,
		"lng": -78.64469344,
		"pop": 789991.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "North Carolina"
	},
	{
		"city": "Cleveland",
		"lat": 41.4699868,
		"lng": -81.69499821,
		"pop": 1169757,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Ohio"
	},
	{
		"city": "Cincinnati",
		"lat": 39.16188479,
		"lng": -84.45692265,
		"pop": 971191,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Ohio"
	},
	{
		"city": "Nashville",
		"lat": 36.16997438,
		"lng": -86.77998499,
		"pop": 703926,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Tennessee"
	},
	{
		"city": "Memphis",
		"lat": 35.1199868,
		"lng": -89.99999516,
		"pop": 753843.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Tennessee"
	},
	{
		"city": "Norfolk",
		"lat": 36.84995872,
		"lng": -76.28000574,
		"pop": 645336,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Virginia"
	},
	{
		"city": "Milwaukee",
		"lat": 43.05265505,
		"lng": -87.91996708,
		"pop": 983590,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Wisconsin"
	},
	{
		"city": "Buffalo",
		"lat": 42.87997825,
		"lng": -78.88000208,
		"pop": 647778.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "New York"
	},
	{
		"city": "Pittsburgh",
		"lat": 40.4299986,
		"lng": -79.99998539,
		"pop": 1535267.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Pennsylvania"
	},
	{
		"city": "Minneapolis",
		"lat": 44.97997927,
		"lng": -93.25178634,
		"pop": 1491886.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Minnesota"
	},
	{
		"city": "Honolulu",
		"lat": 21.30687644,
		"lng": -157.8579979,
		"pop": 578828.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Hawaii"
	},
	{
		"city": "Seattle",
		"lat": 47.57000205,
		"lng": -122.339985,
		"pop": 1821684.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Washington"
	},
	{
		"city": "Phoenix",
		"lat": 33.53997988,
		"lng": -112.0699917,
		"pop": 2436022.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Arizona"
	},
	{
		"city": "San Diego",
		"lat": 32.82002382,
		"lng": -117.1799899,
		"pop": 1938570.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "St. Louis",
		"lat": 38.63501772,
		"lng": -90.23998051,
		"pop": 1259958,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Missouri"
	},
	{
		"city": "New Orleans",
		"lat": 29.99500246,
		"lng": -90.03996688,
		"pop": 527428.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Louisiana"
	},
	{
		"city": "Dallas",
		"lat": 32.82002382,
		"lng": -96.84001693,
		"pop": 3004852,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "Boston",
		"lat": 42.32996014,
		"lng": -71.07001367,
		"pop": 2528070.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Massachusetts"
	},
	{
		"city": "Tampa",
		"lat": 27.94698793,
		"lng": -82.45862085,
		"pop": 1319232.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Florida"
	},
	{
		"city": "Philadelphia",
		"lat": 39.99997316,
		"lng": -75.16999597,
		"pop": 3504775,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Pennsylvania"
	},
	{
		"city": "Detroit",
		"lat": 42.32996014,
		"lng": -83.08005579,
		"pop": 2526135,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Michigan"
	},
	{
		"city": "Anchorage",
		"lat": 61.21996991,
		"lng": -149.9002149,
		"pop": 252068,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Alaska"
	},
	{
		"city": "San Francisco",
		"lat": 37.74000775,
		"lng": -122.4599777,
		"pop": 2091036,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Denver",
		"lat": 39.73918805,
		"lng": -104.984016,
		"pop": 1930799.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Colorado"
	},
	{
		"city": "Houston",
		"lat": 29.81997438,
		"lng": -95.33997929,
		"pop": 4053287,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Texas"
	},
	{
		"city": "Miami",
		"lat": 25.7876107,
		"lng": -80.22410608,
		"pop": 2983947,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Florida"
	},
	{
		"city": "Atlanta",
		"lat": 33.83001385,
		"lng": -84.39994938,
		"pop": 2464454,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Georgia"
	},
	{
		"city": "Chicago",
		"lat": 41.82999066,
		"lng": -87.75005497,
		"pop": 5915976,
		"iso2": "US",
		"iso3": "USA",
		"prov": "Illinois"
	},
	{
		"city": "Los Angeles",
		"lat": 33.98997825,
		"lng": -118.1799805,
		"pop": 8097410,
		"iso2": "US",
		"iso3": "USA",
		"prov": "California"
	},
	{
		"city": "Washington, D.C.",
		"lat": 38.89954938,
		"lng": -77.00941858,
		"pop": 2445216.5,
		"iso2": "US",
		"iso3": "USA",
		"prov": "District of Columbia"
	},
	{
		"city": "New York",
		"lat": 40.74997906,
		"lng": -73.98001693,
		"pop": 13524139,
		"iso2": "US",
		"iso3": "USA",
		"prov": "New York"
	},
	{
		"city": "Montevideo",
		"lat": -34.85804157,
		"lng": -56.17105229,
		"pop": 759162,
		"iso2": "UY",
		"iso3": "URY",
		"prov": "Montevideo"
	},
	{
		"city": "Qarshi",
		"lat": 38.87042971,
		"lng": 65.80000403,
		"pop": 304629.5,
		"iso2": "UZ",
		"iso3": "UZB",
		"prov": "Kashkadarya"
	},
	{
		"city": "Fargona",
		"lat": 40.3899752,
		"lng": 71.78000077,
		"pop": 482000,
		"iso2": "UZ",
		"iso3": "UZB",
		"prov": "Ferghana"
	},
	{
		"city": "Namangan",
		"lat": 41.00001548,
		"lng": 71.66998165,
		"pop": 599600,
		"iso2": "UZ",
		"iso3": "UZB",
		"prov": "Namangan"
	},
	{
		"city": "Andijon",
		"lat": 40.79000246,
		"lng": 72.33996659,
		"pop": 486950,
		"iso2": "UZ",
		"iso3": "UZB",
		"prov": "Andijon"
	},
	{
		"city": "Samarqand",
		"lat": 39.67001914,
		"lng": 66.94499874,
		"pop": 652150,
		"iso2": "UZ",
		"iso3": "UZB",
		"prov": "Samarkand"
	},
	{
		"city": "Tashkent",
		"lat": 41.31170188,
		"lng": 69.29493282,
		"pop": 2081014,
		"iso2": "UZ",
		"iso3": "UZB",
		"prov": "Tashkent"
	},
	{
		"city": "Cabimas",
		"lat": 10.42999514,
		"lng": -71.44999048,
		"pop": 320956,
		"iso2": "VE",
		"iso3": "VEN",
		"prov": "Trujillo"
	},
	{
		"city": "Puerto la Cruz",
		"lat": 10.16995933,
		"lng": -64.68001612,
		"pop": 500464,
		"iso2": "VE",
		"iso3": "VEN",
		"prov": "Anzoátegui"
	},
	{
		"city": "Los Teques",
		"lat": 10.41996991,
		"lng": -67.02002832,
		"pop": 303470,
		"iso2": "VE",
		"iso3": "VEN",
		"prov": "Distrito Capital"
	},
	{
		"city": "Barcelona",
		"lat": 10.13037518,
		"lng": -64.72001367,
		"pop": 361430,
		"iso2": "VE",
		"iso3": "VEN",
		"prov": "Anzoátegui"
	},
	{
		"city": "Barquisimeto",
		"lat": 10.04999249,
		"lng": -69.29996668,
		"pop": 962745,
		"iso2": "VE",
		"iso3": "VEN",
		"prov": "Lara"
	},
	{
		"city": "Maturin",
		"lat": 9.749959126,
		"lng": -63.17003076,
		"pop": 357707.5,
		"iso2": "VE",
		"iso3": "VEN",
		"prov": "Monagas"
	},
	{
		"city": "Ciudad Bolivar",
		"lat": 8.099982319,
		"lng": -63.60000452,
		"pop": 317971.5,
		"iso2": "VE",
		"iso3": "VEN",
		"prov": "Bolívar"
	},
	{
		"city": "Maracay",
		"lat": 10.2468797,
		"lng": -67.59580713,
		"pop": 1007000,
		"iso2": "VE",
		"iso3": "VEN",
		"prov": "Aragua"
	},
	{
		"city": "San Cristobal",
		"lat": 7.770002461,
		"lng": -72.24996749,
		"pop": 342690.5,
		"iso2": "VE",
		"iso3": "VEN",
		"prov": "Táchira"
	},
	{
		"city": "Valencia",
		"lat": 10.22998151,
		"lng": -67.9800214,
		"pop": 1569526.5,
		"iso2": "VE",
		"iso3": "VEN",
		"prov": "Carabobo"
	},
	{
		"city": "Ciudad Guayana",
		"lat": 8.370017516,
		"lng": -62.61998682,
		"pop": 634317.5,
		"iso2": "VE",
		"iso3": "VEN",
		"prov": "Bolívar"
	},
	{
		"city": "Maracaibo",
		"lat": 10.72997683,
		"lng": -71.65997766,
		"pop": 1764650,
		"iso2": "VE",
		"iso3": "VEN",
		"prov": "Zulia"
	},
	{
		"city": "Caracas",
		"lat": 10.50099855,
		"lng": -66.91703719,
		"pop": 2400339.5,
		"iso2": "VE",
		"iso3": "VEN",
		"prov": "Distrito Capital"
	},
	{
		"city": "Viet Tri",
		"lat": 21.33041506,
		"lng": 105.4299882,
		"pop": 305144,
		"iso2": "VN",
		"iso3": "VNM",
		"prov": "Phú Thọ"
	},
	{
		"city": "Thai Nguyen",
		"lat": 21.59995933,
		"lng": 105.8300154,
		"pop": 415000,
		"iso2": "VN",
		"iso3": "VNM",
		"prov": "Thái Nguyên"
	},
	{
		"city": "Vinh",
		"lat": 18.6999813,
		"lng": 105.6799987,
		"pop": 514426.5,
		"iso2": "VN",
		"iso3": "VNM",
		"prov": "Nghệ An"
	},
	{
		"city": "Nha Trang",
		"lat": 12.25003908,
		"lng": 109.1700183,
		"pop": 347498.5,
		"iso2": "VN",
		"iso3": "VNM",
		"prov": "Khánh Hòa"
	},
	{
		"city": "Qui Nhon",
		"lat": 13.77997154,
		"lng": 109.1800435,
		"pop": 543095,
		"iso2": "VN",
		"iso3": "VNM",
		"prov": "Bình Định"
	},
	{
		"city": "Hue",
		"lat": 16.46998822,
		"lng": 107.5800378,
		"pop": 645000,
		"iso2": "VN",
		"iso3": "VNM",
		"prov": "Thừa Thiên–Huế"
	},
	{
		"city": "Bien Hoa",
		"lat": 10.97001385,
		"lng": 106.8300577,
		"pop": 652646,
		"iso2": "VN",
		"iso3": "VNM",
		"prov": "Đồng Nai"
	},
	{
		"city": "Can Tho",
		"lat": 10.04999249,
		"lng": 105.7700191,
		"pop": 690299,
		"iso2": "VN",
		"iso3": "VNM",
		"prov": "Can Tho"
	},
	{
		"city": "Haiphong",
		"lat": 20.83000633,
		"lng": 106.6800927,
		"pop": 1285847.5,
		"iso2": "VN",
		"iso3": "VNM",
		"prov": "Quảng Ninh"
	},
	{
		"city": "Da Nang",
		"lat": 16.06003908,
		"lng": 108.2499711,
		"pop": 943534.5,
		"iso2": "VN",
		"iso3": "VNM",
		"prov": "Da Nang"
	},
	{
		"city": "Hanoi",
		"lat": 21.03332725,
		"lng": 105.8500142,
		"pop": 2904635,
		"iso2": "VN",
		"iso3": "VNM",
		"prov": "Thái Nguyên"
	},
	{
		"city": "Ho Chi Minh City",
		"lat": 10.78002545,
		"lng": 106.6950272,
		"pop": 4390665.5,
		"iso2": "VN",
		"iso3": "VNM",
		"prov": "Ho Chi Minh City"
	},
	{
		"city": "Al Hudaydah",
		"lat": 14.79794558,
		"lng": 42.95297481,
		"pop": 627610.5,
		"iso2": "YE",
		"iso3": "YEM",
		"prov": "Al Hudaydah"
	},
	{
		"city": "Taizz",
		"lat": 13.60445253,
		"lng": 44.03942012,
		"pop": 683111,
		"iso2": "YE",
		"iso3": "YEM",
		"prov": "Ta`izz"
	},
	{
		"city": "Aden",
		"lat": 12.77972251,
		"lng": 45.00949011,
		"pop": 775301,
		"iso2": "YE",
		"iso3": "YEM",
		"prov": "`Adan"
	},
	{
		"city": "Sanaa",
		"lat": 15.3547333,
		"lng": 44.20659338,
		"pop": 1921926.5,
		"iso2": "YE",
		"iso3": "YEM",
		"prov": "Amanat Al Asimah"
	},
	{
		"city": "Ndola",
		"lat": -12.99994424,
		"lng": 28.65002356,
		"pop": 395428.5,
		"iso2": "ZM",
		"iso3": "ZMB",
		"prov": "Copperbelt"
	},
	{
		"city": "Kitwe",
		"lat": -12.81003335,
		"lng": 28.22002397,
		"pop": 402907.5,
		"iso2": "ZM",
		"iso3": "ZMB",
		"prov": "Copperbelt"
	},
	{
		"city": "Lusaka",
		"lat": -15.41664427,
		"lng": 28.28332759,
		"pop": 1297720,
		"iso2": "ZM",
		"iso3": "ZMB",
		"prov": "Lusaka"
	},
	{
		"city": "Chitungwiza",
		"lat": -18.00000079,
		"lng": 31.10000321,
		"pop": 331071,
		"iso2": "ZW",
		"iso3": "ZWE",
		"prov": "Harare"
	},
	{
		"city": "Harare",
		"lat": -17.81778969,
		"lng": 31.04470943,
		"pop": 1557406.5,
		"iso2": "ZW",
		"iso3": "ZWE",
		"prov": "Harare"
	},
	{
		"city": "Bulawayo",
		"lat": -20.16999754,
		"lng": 28.58000199,
		"pop": 697096,
		"iso2": "ZW",
		"iso3": "ZWE",
		"prov": "Bulawayo"
	}
];

export default worldCities;