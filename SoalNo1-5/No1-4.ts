type IFruit = {
	fruitId: number;
	fruitName: string;
	fruitType: "IMPORT" | "LOCAL";
	stock: number;
};

const fruits: IFruit[] = [
	{ fruitId: 1, fruitName: "Apel", fruitType: "IMPORT", stock: 10 },
	{ fruitId: 2, fruitName: "Kurma", fruitType: "IMPORT", stock: 20 },
	{ fruitId: 3, fruitName: "apel", fruitType: "IMPORT", stock: 50 },
	{ fruitId: 4, fruitName: "Manggis", fruitType: "LOCAL", stock: 100 },
	{ fruitId: 5, fruitName: "Jeruk Bali", fruitType: "LOCAL", stock: 10 },
	{ fruitId: 5, fruitName: "KURMA", fruitType: "IMPORT", stock: 20 },
	{ fruitId: 5, fruitName: "Salak", fruitType: "LOCAL", stock: 150 },
];

// Buah apa saja yang dimiliki
const getFruitNames = (fruits: IFruit[]) => {
	const fruitNames: string[] = [];
	fruits.forEach((item) => {
		const isRegistered = fruitNames.includes(item.fruitName.toLowerCase());
		if (!isRegistered) fruitNames.push(item.fruitName.toLowerCase());
	});
	return fruitNames.join(", ");
};

const getTotalFruits = (fruits: IFruit[]) => {
	let total = 0;
	fruits.forEach((item) => {
		total += item.stock;
	});
	return total;
};

const getFruitContainers = (fruits: IFruit[]) => {
	const containers = {};

	fruits.forEach((item) => {
		const isRegistered = containers[item.fruitType];
		if (!isRegistered) {
			containers[item.fruitType] = [item];
		} else {
			containers[item.fruitType].push(item);
		}
	});

	// Jumlah wadah yang dibutuhkan dan buah untuk masing-masing wadah
	for (const kunci in containers) {
		if (Object.prototype.hasOwnProperty.call(containers, kunci)) {
			const element = containers[kunci];
			const fruitNames = getFruitNames(element);
			console.log(`Wadah ${kunci} berisi ${fruitNames}`);
			const fruitTotal = getTotalFruits(element);
			console.log(`Wadah ${kunci} berisi ${fruitTotal} total buah`);
		}
	}

	return containers;
};

// Notes:
/**
	1. fruitId tidak berurutan dan tidak unique, harusnya masing-masing elemen memiliki id yang unique
	2. untuk fruitnamenya harus memiliki format yang tepat, untuk menghindari nama buah yang sama.
*/