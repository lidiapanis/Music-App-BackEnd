Getting Started
Step 1: Clone the repository
Step 2: Start the Metro Server
First, you will need to start Metro, the JavaScript bundler that ships with React Native.

To start Metro, run the following command from the root of your React Native project:

# using npm
npm start

# OR using Yarn
yarn start
Step 3: Start the Application
Let Metro Bundler run in its own terminal. Open a new terminal from the root of your React Native project. Run the following command to start your Android or iOS app:

For Android
# using npm
npm run android

# OR using Yarn
yarn android
For iOS
# using npm
npm run ios

# OR using Yarn
yarn ios
If everything is set up correctly, you should see the app running in your Android Emulator or iOS Simulator shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

Troubleshooting
If you can't get this to work, see the Troubleshooting page.

This App uses one Api, here is the link: https://github.com/profgabrielinfnet/musicapi
Music Api
How to run the project?
Getting Started
First, clone the repository
Run npm install
Run npm run dev
Routes
LOGIN: POST localhost:3000/user/login Request:

{
	    "username": "gabriel",
	    "password": "1234"
}
Response:

{
        "token": 18191787
    }
REGISTER: POST localhost:3000/user/register Request:

{
	    "username": "gabriel",
	    "password": "1234"
}
Response:

{
	    "message": "user created successfully"
    }
ALBUMS: GET localhost:3000/albums header: Authorization: Bearer ${token} Request: Response:

[
	{
		"id": "1",
		"album": "Angra",
		"img": "https://m.media-amazon.com/images/I/51Yee8dkecL._UF1000,1000_QL80_.jpg"
	},
	{
		"id": "2",
		"album": "Legiao",
		"img": "https://www.vagalume.com.br/legiao-urbana/discografia/legiao-urbana.jpg"
	},
	{
		"id": "3",
		"album": "Iron maden",
		"img": "https://pbs.twimg.com/media/F9c7D_vX0AAkl7C?format=jpg&name=large"
	},
	{
		"id": "4",
		"album": "Guns",
		"img": "https://www12.senado.leg.br/radio/1/capitulo-rock/2020/01/31/guns-n2019-roses/guns_n_roses.jpg/@@images/24c8f793-0823-4756-b0e7-3c1f1b71fb1e.jpeg"
	}
]
STORIES: GET localhost:3000/stories header: Authorization: Bearer ${token} Request: Response:

	{
		"id": "1",
		"name: "Nathanzinho",
		 img: "https://uploads.metropoles.com/wp-content/uploads/2022/08/17164733/WhatsApp-Image-2022-08-17-at-16.36.56-835x1024.jpeg"
	},
	{
		"id": "2",
		"name: "Anderson Paak",
		 "img: "https://monkeybuzz.com.br/wp-content/uploads/2019/06/hollie-fernando-1920x1280.jpg",
	},
	{
		"id": "3",
		"name: "Beyonce",
		"img: "https://i.em.com.br/I-gX53eZOL0FN60bnwMrmcgTRo4=/750x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/08/09/1543194/beyonce_1_83139.jpg",
	},
	{
		"id": "4",
		"name: "Madonna",
		"img: "https://veja.abril.com.br/wp-content/uploads/2022/03/Madonna.jpg.jpg?quality=90&strip=info&w=680&h=453&crop=1",
  }
]
