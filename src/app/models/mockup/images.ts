import { ImageModel } from '../image';

let colors = ['1abc9c', '2ecc71', '3498db',
	'9b59b6', '34495e', '16a085',
	'27ae60', '2980b9', '8e44ad',
	'2c3e50', 'f1c40f', 'e67e22',
	'e74c3c', 'ecf0f1', '95a5a6',
	'f39c12', 'd35400', 'c0392b'];
let models : ImageModel[] = [];

for (let i = 0; i < 6; i++)
{
	models.push({id: new Number(Math.floor(Math.random() * 50) + 10).toString(),
		author: "John Doe",
		width: 561,
		height: 374,
		url: "https://via.placeholder.com/561x374/" + colors[Math.floor(Math.random() * colors.length)] + "/ffffff?text=placeholder",
		download_url: "https://via.placeholder.com/561x374/" + colors[Math.floor(Math.random() * colors.length)] + "/ffffff?text=placeholder"
	});
}


export const mockImageList : ImageModel[] = models;
