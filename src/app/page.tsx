"use client"
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/shorten', {
        original_url: originalUrl,
      });
      setShortUrl(response.data.short_url);
      setQrCodeUrl(`http://127.0.0.1:5000/api/qrcode/${response.data.short_url.split('/').pop()}`);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="original_url">Enter URL:</label>
        <input
          type="url"
          id="original_url"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          required
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <div>
          <h2>Shortened URL:</h2>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
          <h2>QR Code:</h2>
          <img src={qrCodeUrl} alt="QR Code" />
        </div>
      )}
    </div>
  );
}
