import React, { useState } from "react";

export default function ForMyLovelove() {
  const [page, setPage] = useState("home");

  const loveLetter = `Happy 30th Birthday, my love.

I know you’ve been feeling a bit down about turning 30, thinking you should have been more successful by now. But I just want you to pause for a moment and see yourself the way I do. You’re hardworking, focused, disciplined, and loving — and those things mean more than any timeline or milestone. You’re not behind, love. You’re exactly where you need to be, learning, growing, and building something real for yourself.

I know it’s not easy to start over or to chase your goals when it feels like time is moving too fast, but please remember that beginnings don’t have an age limit. You’re doing your best, and that’s something to be proud of. I see how you give your all every single day, even when no one notices, and I hope you know how much that inspires me.

Turning 30 doesn’t mean you’re late — it just means you’ve lived, learned, and are now wiser to take on what’s next. You’ve come so far, and I believe that everything you’ve been working for will fall into place at the right time.

And through it all, I’ll be right here, cheering for you, loving you, and reminding you that you are already enough — with or without the success you think you need. You’re already a man I’m proud of.

So today, celebrate yourself. Not for what you’ve achieved, but for who you’ve become. You deserve peace, love, and all the good things still waiting for you.`;

  const reasons = [
    "You work hard and never give up",
    "You make me feel safe even from afar",
    "You’re focused and purposeful",
    "Your quiet love says more than words",
    "You make ordinary days feel special"
  ];

  const gallery = [
    {
      src: "https://placehold.co/600x400?text=Our+Photo+1",
      caption: "When you smiled that day"
    },
    {
      src: "https://placehold.co/600x400?text=Our+Photo+2",
      caption: "Late night calls"
    },
    {
      src: "https://placehold.co/600x400?text=Our+Photo+3",
      caption: "Little everyday moments"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-indigo-50 text-gray-800">
      <header className="max-w-4xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">For My <span className="text-pink-500">Lovelove</span></h1>
          <p className="text-sm text-gray-600">A little playful site I made just for you, babe 💗</p>
        </div>
        <nav className="space-x-3">
          <button onClick={() => setPage("home")} className={`px-3 py-1 rounded-full ${page==="home"?"bg-pink-500 text-white":"bg-white shadow"}`}>Home</button>
          <button onClick={() => setPage("story")} className={`px-3 py-1 rounded-full ${page==="story"?"bg-pink-500 text-white":"bg-white shadow"}`}>Our Story</button>
          <button onClick={() => setPage("letter")} className={`px-3 py-1 rounded-full ${page==="letter"?"bg-pink-500 text-white":"bg-white shadow"}`}>Love Letter</button>
          <button onClick={() => setPage("reasons")} className={`px-3 py-1 rounded-full ${page==="reasons"?"bg-pink-500 text-white":"bg-white shadow"}`}>Reasons I Love You</button>
          <button onClick={() => setPage("gallery")} className={`px-3 py-1 rounded-full ${page==="gallery"?"bg-pink-500 text-white":"bg-white shadow"}`}>Gallery</button>
          <button onClick={() => setPage("message")} className={`px-3 py-1 rounded-full ${page==="message"?"bg-pink-500 text-white":"bg-white shadow"}`}>Message</button>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        {page === "home" && (
          <section className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h2 className="text-2xl font-semibold">Hi, Lovelove! 💕</h2>
            <p className="mt-4">This is my little corner just for you — full of soft memories, silly captions, and a whole lot of love.</p>
            <div className="mt-6 flex justify-center gap-4">
              <button onClick={() => setPage("letter")} className="px-5 py-2 rounded-full bg-pink-500 text-white shadow">Open your letter</button>
              <button onClick={() => setPage("gallery")} className="px-5 py-2 rounded-full bg-white shadow">See our photos</button>
            </div>
            <div className="mt-8">
              <div className="inline-flex items-center space-x-3 bg-pink-50 p-3 rounded-full shadow-sm">
                <span className="text-xl">🎈</span>
                <div className="text-left">
                  <div className="text-sm text-gray-600">Today’s little reminder:</div>
                  <div className="font-medium">You are loved. You are enough. — Always.</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {page === "story" && (
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <p className="mt-4 leading-relaxed">Nine months ago we started something small — messages that turned into late-night calls, plans that turned into promises, and little moments that quietly built us. We may be far sometimes, but distance never stopped us from showing up. This space holds those small, soft pieces of us.</p>
            <ul className="mt-6 space-y-2">
              <li>• First time we talked: that nervous laugh I still remember</li>
              <li>• First time I knew: when you made time even when you were busy</li>
              <li>• What I love most: the way you stay focused and keep going</li>
            </ul>
          </section>
        )}

        {page === "letter" && (
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold">Love Letter</h2>
            <div className="mt-4 whitespace-pre-line leading-relaxed text-gray-800">{loveLetter}</div>
            <div className="mt-6 flex gap-3">
              <button onClick={() => navigator.clipboard.writeText(loveLetter)} className="px-4 py-2 rounded-full bg-pink-500 text-white">Copy Letter</button>
              <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(loveLetter)}`} download="love-letter.txt" className="px-4 py-2 rounded-full bg-white shadow">Download</a>
            </div>
          </section>
        )}

        {page === "reasons" && (
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold">Reasons I Love You</h2>
            <p className="text-sm text-gray-600 mt-2">(A playful, honest list — add more if you want!)</p>
            <ol className="mt-4 list-decimal list-inside space-y-2">
              {reasons.map((r, i) => (
                <li key={i} className="bg-pink-50 p-3 rounded-lg">{r}</li>
              ))}
            </ol>
            <div className="mt-6">
              <textarea placeholder="Add another reason..." className="w-full p-3 rounded-md border" rows={2}></textarea>
              <div className="mt-3 flex justify-end">
                <button className="px-4 py-2 rounded-full bg-pink-500 text-white">Add</button>
              </div>
            </div>
          </section>
        )}

        {page === "gallery" && (
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold">Gallery / Memories</h2>
            <p className="text-sm text-gray-600 mt-2">(Replace placeholders with your photos later)</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {gallery.map((g, i) => (
                <figure key={i} className="rounded-lg overflow-hidden shadow">
                  <img src={g.src} alt={g.caption} className="w-full h-44 object-cover" />
                  <figcaption className="p-3 bg-white">{g.caption}</figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-6">
              <label className="block text-sm text-gray-600">Upload a photo (not functional in preview; replace src in code)</label>
              <input type="file" className="mt-2" disabled />
            </div>
          </section>
        )}

        {page === "message" && (
          <section className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h2 className="text-2xl font-semibold">Message for You</h2>
            <p className="mt-4">No matter how far we are, I hope this little website reminds you that you’re loved — always, endlessly, and for real.</p>
            <p className="mt-4 font-medium">— Always, your <span className="text-pink-500">Lovey</span></p>
            <div className="mt-6"> 
              <button onClick={() => alert('Message sent! (This is a demo)')} className="px-4 py-2 rounded-full bg-pink-500 text-white">Send a surprise message</button>
            </div>
          </section>
        )}

      </main>

      <footer className="max-w-4xl mx-auto p-6 text-center text-sm text-gray-500">
        <div>Made with ♥ for Lovelove • Built by Kath</div>
      </footer>
    </div>
  );
}
