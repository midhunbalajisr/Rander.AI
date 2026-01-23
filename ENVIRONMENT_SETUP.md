# Environment Setup Guide

## Quick Start

1. **Copy the example environment file:**
   ```bash
   copy .env.example .env
   ```

2. **Configure your environment variables in `.env`:**

   ### Required Variables:

   - **`RESEND_API_KEY`**: re_d6iRag8d_NZK4JmZttpphsvEuN8xC2v4q
     - Get it from: https://resend.com/api-keys
     - Used for sending contact form emails
     - Example: `re_123abc456def789ghi`

   - **`PORT`**: Server port (default: 3001)
     - The backend server will run on this port
     - Default is fine for local development

   - **`FRONTEND_URL`**: Frontend URL for CORS
     - Development: `http://localhost:5173`
     - Production: `https://randerai.in`

## Getting Your Resend API Key

1. Go to https://resend.com
2. Sign up or log in
3. Navigate to "API Keys" section
4. Click "Create API Key"
5. Copy the key and paste it in your `.env` file

## Example `.env` File

```env
PORT=3001
RESEND_API_KEY=re_your_actual_api_key_here
FRONTEND_URL=http://localhost:5173
```

## Important Notes

- ⚠️ **Never commit your `.env` file to Git** (it's already in `.gitignore`)
- ✅ The `.env.example` file is safe to commit (it contains no secrets)
- 🔄 Remember to restart your server after updating environment variables
- 📝 Update `.env.example` when adding new environment variables

## Troubleshooting

**Email not sending?**
- Check if `RESEND_API_KEY` is set correctly
- Verify your Resend account is active
- Check server logs for error messages

**Server not starting?**
- Make sure PORT 3001 is not already in use
- Try changing the PORT value in `.env`

**CORS errors?**
- Ensure `FRONTEND_URL` matches your actual frontend URL
- Check the CORS configuration in `server/index.js`
