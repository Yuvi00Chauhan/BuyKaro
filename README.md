# **BuyKaro** 🚀  

## **Features**  
✅ **Product Listings** with real-time API fetching  
✅ **Shopping Cart** functionality using React Context API  
✅ **Search Functionality** for filtering products  
✅ **Google Firebase** for user registration and user authetication  
✅ **Optimized Performance** with lazy loading  
✅ **Responsive Design** for all devices  

---

## **🛠️ Installation & Setup**  
1. **Clone the repository**  
   ```sh
   git clone https://github.com/Yuvi00Chauhan/BuyKaro.git
   cd buy-karo
   ```
2. **Install dependencies**  
   ```sh
   npm install
   ```
3. **Start the development server**  
   ```sh
   npm start
   ```
4. Open **http://localhost:3000** in your browser.

---

## **⚙️ Tech Stack**  
- **Frontend:** React, React Router, Context API  
- **Styling:** CSS  
- **Data Fetching:** `fetch()` from [FakeStore API](https://fakestoreapi.com/)
- **Database:** Google Firebase
- **Deployment:** Netlify  

---

## **🚀 Deployment (Netlify)**  
1. Push your project to **GitHub**.  
2. Go to **Netlify Dashboard** → Click **"New Site from Git"**.  
3. Select your repository and configure build settings:  
   - **Build Command:** `npm run build`  
   - **Publish Directory:** `build/`  
4. Click **"Deploy"** and wait for Netlify to finish.  
5. 🎉 **Your project is live!**  

---

## **🐞 Troubleshooting**  
**🔹 Refreshing Routes Breaks on Netlify?**  
Add a `_redirects` file in the `public/` folder with this content:  
```
/*    /index.html   200
```

Alternatively, use `netlify.toml`:  
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## **📜 License**  
This project is open-source and available under the **MIT License**.

---

## **💡 Contributing**  
Want to contribute? **Fork the repo, make changes, and submit a PR!** 😊

