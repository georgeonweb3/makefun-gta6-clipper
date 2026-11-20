# Vice City Is Back — GTA 6 clip for make.fun (`gta6-clipper-01`)

A 27-second vertical Short cut by an AI agent in this session, from Rockstar's
official Grand Theft Auto VI Trailer 2 on YouTube
(`https://www.youtube.com/watch?v=VQRLujxTm3c`, 2:47, downloaded 720p with
yt-dlp in this session — no pirated footage, no finished clip reused).

## The moment I chose, and why

The Vice City drive, trailer time 0:34.6–0:52.6. It opens first-person behind
the wheel on a Vice City highway — jet overhead, green highway signs for VCI
Airport / Downtown / Peacock Bay, a jet ski on a trailer in the next lane —
then cuts through beach life, a mural street with police lights, and Jason
driving at dusk. I picked it because the opening frame alone says "you are in
Vice City": it is the most instantly readable GTA image in the trailer, it
survives a vertical crop (the road and signs stay centre-frame), and the
sequence is one continuous drive through the city rather than a random
montage. The hook text `VICE CITY IS BACK` sits over that opening shot for
the first 4 seconds.

## The creative

- 0:00–0:18 — the Vice City drive, trailer audio, letterbox cropped out,
  blur-filled to 1080x1920 vertical, hook text `VICE CITY IS BACK`.
- 0:18–0:27 — black end card, on-screen text only (no voiceover — no TTS
  route was used, nothing faked): `Make clips like this with AI` /
  `and earn money on make.fun` / `make.fun/bounty/gta6-clipper-01`, 3 seconds
  a line, each long enough to read.
- Rendered in this session with ffmpeg 8.1.2: trim + crop + blur-fill +
  drawtext, then a 9-second pitch card concatenated on. Frames at 1s, 6s,
  15s, 20s and 25s were inspected in-session; the first render opened on a
  shop counter, so the cut was moved to 0:34.6 and re-rendered.

`clip.mp4`: 1080x1920, 27.02 s, 9.5 MB, H.264 + AAC. Source footage kept
beside the repo at `../source-trailer2.mp4` (not part of the entry).

## The video (title + description to use on upload)

Title: **Vice City Is Back — GTA 6 is finally here #GTA6 #Shorts**

Description (paste exactly; the first line is the bounty's required line,
word for word):

    Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

    Play code: makefun-spatula-dahlia-rain

    Vice City is back. GTA 6 Trailer 2, cut into a Short.
    #GTA6 #GTA6Trailer #ViceCity #Shorts

Play code: `makefun-spatula-dahlia-rain` — code 0 of 4 for George's make.fun
account, verified for THIS contest with the kit CLI on 2026-11-20 (the check
prints it: "play code: makefun-spatula-dahlia-rain (code 0 of your 4 in
gta6-clipper-01)"). It is NOT the meme-contest code
(`makefun-glove-waffle-sparrow` is for `gta6-meme-x-01` only — the codes are
per-competition, and assuming the old one would have failed the entry).
Any one of the four codes passes; this is code 0.

## Status: NOT uploaded, NOT submitted

`VIDEO.json` is `{"url": null}` on purpose — no URL is invented. The clip has
not been uploaded to YouTube and nothing has been submitted.

## Upload step still needed (needs George's go)

1. George approves the upload and names the YouTube channel (his
   @thealphatools channel is the connected one on record — confirm it is the
   one to use).
2. Upload `clip.mp4` as a public Short with the title and description above,
   published before the deadline, Mon 2026-11-23 02:00 WAT. Keep it public
   until the results are out.
3. Copy the video's Share address and set `VIDEO.json` to
   `{"url": "https://www.youtube.com/shorts/<id>"}`.
4. Run the kit check, bundle the transcripts, and submit that commit before
   the deadline. Places go by YouTube views at the deadline; top 20 share
   $500 ($100 / $70 / $50, then $20 for 4th–10th, $14 for 11th–20th).

## Run the program locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
