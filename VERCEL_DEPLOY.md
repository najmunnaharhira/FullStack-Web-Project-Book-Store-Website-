# Deploy Frontend on Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New** → **Project** → import this repo.
2. **Important:** In **Project Settings** → **General** → **Root Directory**, set it to **`Client`** (click Edit, enter `Client`, Save).
3. Vercel will then run `npm install` and `npm run build` inside the `Client` folder. Leave **Build Command** and **Output Directory** as auto-detected (or use `npm run build` and `dist`).
4. Add environment variable **`VITE_API_URL`** = your backend URL (e.g. from Railway/Render) when you have a live API.
5. Deploy. Your app will be at `https://your-project.vercel.app`.

The backend (Node + MySQL) must be hosted elsewhere (e.g. Railway, Render).
