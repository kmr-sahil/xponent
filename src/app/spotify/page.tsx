"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SpotifyControl() {
  const [topTracks, setTopTracks] = useState([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState("");

  const API_BASE = "https://cracto-backend-test-spotify.onrender.com/spotify"; // change if hosted

  const getTopTracks = async () => {
    try {
      const res = await axios.get(`${API_BASE}/top-tracks`);
      setTopTracks(res.data.items || []);
      setMessage("✅ Top tracks loaded successfully.");
    } catch (_) {
      setMessage(
        "❌ Failed to fetch top tracks. Please check if Spotify is running and authorized."
      );
    }
  };

  const getCurrentlyPlaying = async () => {
    try {
      const res = await axios.get(`${API_BASE}/currently-playing`);
      if (res.data?.item) {
        setCurrentlyPlaying(res.data.item);
        setIsPlaying(true);
        setMessage(
          `🎵 Now playing: ${res.data.item.name} by ${res.data.item.artists
            .map((a: any) => a.name)
            .join(", ")}`
        );
      } else {
        setCurrentlyPlaying(null);
        setIsPlaying(false);
        setMessage("ℹ️ No track is currently playing.");
      }
    } catch (_) {
      setCurrentlyPlaying(null);
      setIsPlaying(false);
      setMessage(
        "❌ Failed to fetch currently playing track. Make sure your Spotify player is active."
      );
    }
  };

  const playTrack = async (trackId: string) => {
    try {
      const res = await axios.post(`${API_BASE}/play/${trackId}`);
      setMessage(res.data.message || "🎵 Track started playing.");
      setIsPlaying(true);
      setTimeout(() => getCurrentlyPlaying(), 1000);
    } catch (err: any) {
      const errMsg = err?.response?.data?.message;
      if (errMsg?.includes("NO_ACTIVE_DEVICE")) {
        setMessage(
          "❌ Spotify player is not active. Open Spotify and start any track manually once."
        );
      } else {
        setMessage("❌ Failed to play track. Please check if Spotify is open.");
      }
      setIsPlaying(false);
    }
  };

  const stopPlayback = async () => {
    try {
      const res = await axios.post(`${API_BASE}/stop`);
      setMessage(res.data.message || "⏹️ Playback stopped.");
      setIsPlaying(false);
      setCurrentlyPlaying(null);
    } catch (err: any) {
      const errMsg = err?.response?.data?.message;
      if (errMsg?.includes("NO_ACTIVE_DEVICE")) {
        setMessage("❌ Cannot stop playback. No active Spotify device found.");
      } else {
        setMessage("❌ Failed to stop playback.");
      }
    }
  };

  useEffect(() => {
    getCurrentlyPlaying();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-4">🎧 Spotify Remote Player</h1>

      <div className="space-y-2 mb-6">
        <button
          onClick={getTopTracks}
          className="bg-green-500 px-4 py-2 rounded"
        >
          Get Top Tracks
        </button>
        <button
          onClick={getCurrentlyPlaying}
          className="bg-blue-500 px-4 py-2 rounded"
        >
          Refresh Currently Playing
        </button>
        <button
          onClick={stopPlayback}
          className={`px-4 py-2 rounded ${
            isPlaying ? "bg-red-500" : "bg-gray-600 cursor-not-allowed"
          }`}
          disabled={!isPlaying}
        >
          Stop Playback
        </button>
      </div>

      {message && <p className="text-yellow-400 mb-4">{message}</p>}

      {currentlyPlaying && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold">▶️ Now Playing:</h2>
          <p>
            {(currentlyPlaying as any)?.name} by{" "}
            {(currentlyPlaying as any)?.map((a: any) => a.name).join(", ")}
          </p>
        </div>
      )}

      {topTracks.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">🎵 Top 10 Tracks</h2>
          <ul className="space-y-3">
            {topTracks.map((track: any, idx) => (
              <li
                key={track.id}
                className="flex items-center justify-between border-b border-gray-700 pb-2"
              >
                <div>
                  <span className="font-semibold">{idx + 1}. </span>
                  {track.name} —{" "}
                  {track.artists.map((a: any) => a.name).join(", ")}
                </div>
                <button
                  onClick={() => playTrack(track.id)}
                  className="bg-purple-600 px-3 py-1 rounded hover:bg-purple-700"
                >
                  Play
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
