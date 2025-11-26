# TUDCTF 2025 - Minecraft save (46 solves)

forensics/Yearn for the Signs

Author: Paul Stokreef 

Category: forensics

Difficulty: Easy

---

## 1. Introduction

Minecraft worlds store almost all gameplay data, including blocks, entities, signs, books, and even command block text, inside compressed region files ending in .mca.

In this challenge, the hidden flag was stored inside a sign’s text, deep inside an MCA region file.

`
I have hidden my secret on a sign somewhere in this world. Good luck finding it now!

Note: You do not need an instance of Minecraft to solve this challenge.
`

---

## 2. Extracting the World Save ZIP

When you've downloaded the world save zip, inside it will be a typical Minecraft Java edition world layout:

`powershell
25-11-2025  20:42    <DIR>          .
25-11-2025  20:41    <DIR>          ..
08-08-2025  10:59    <DIR>          advancements
08-08-2025  10:59    <DIR>          data
08-08-2025  10:59    <DIR>          datapacks
08-08-2025  10:59    <DIR>          DIM-1
08-08-2025  10:59    <DIR>          DIM1
08-08-2025  11:05    <DIR>          entities
08-08-2025  10:59             7.972 icon.png
08-08-2025  11:03             2.412 level.dat
08-08-2025  11:03             2.413 level.dat_old
08-08-2025  11:03    <DIR>          playerdata
08-08-2025  11:05    <DIR>          poi
08-08-2025  11:04    <DIR>          region
08-08-2025  11:00                 3 session.lock
08-08-2025  10:59    <DIR>          stats
`

All blocks and signs in the overworld are stored inside:

`bash
world/region/*.mca
`

These .mca files contain the chunk data, compressed with Zlib, stored in the NBT (Named Binary Tag) format.

---

## 3. Identifying Interesting Files

Flags stored inside the world almost always end up in one of:

- Signs
- Books
- Command Blocks
- Lecterns

These live inside the MCA region files under tags like block_entities and TileEntities

Since the challenge gave me only one region file (r.0.0.mca), I focused on that.

---

## 4. Understanding the MCA Format

Minecraft region files (.mca) use this layout:

- Sector table (4096 bytes)

    - First 4 KB list chunk offsets & lengths

- Chunk data

    - Each chunk is:

        - Length (4 bytes)

        - Compression type (1 byte: 1 = GZip, 2 = Zlib)

        - Zlib-compressed NBT data

NBT uses structured tags such as:

`
TAG_Compound
TAG_List
TAG_String
TAG_Int
`

Signs are stored like:

`json
"block_entities": [
    {
        "id": "minecraft:sign",
        "front_text": {
            "messages": [ "Line1", "Line2", "Line3", "Line4" ]
        }
    }
]
`

So our goal is to find the chunk that contains a sign, decompress it, extract the messages and the flag appears.

---

## 5. Searching the Region File for Zlib Streams

Even without parsing the MCA index, we can scan for Zlib streams because they all start with:

`perl
78 9C  (hex)
`

In Python:

`
indices=[]
for i in range(len(data)-2):
    if data[i]==0x78 and data[i+1]==0x9c:
        indices.append(i)
`

This found hundreds of decompression points.

For each candidate Zlib stream, I attempted:

`python
d = zlib.decompress(data[idx:])
`

Most of these decompress into valid NBT blobs.

---

## 6. Searching for Text in Decompressed Chunks

Once decompressed, I scanned for anything readable:

`python
strings = re.findall(rb"[ -~]{6,}", decompressed_blob)
`

Many chunks contained block names, palette data, heightmaps, etc. But what we are after is sign text, which usually contains the key “messages”.

So I filtered for NBT fields named "messages":

`python
if b'messages' in d:
    print(d)
`
 And only one chunk matched!

---

## 7. Locating the Flag Inside the Sign’s Messages

The decompressed chunk contained this structure:

`
messages
    ""
    ""
    ""
    ""
`

But not empty this time; the messages were UTF-8 strings, each one a piece of the flag.

From the actual decompressed binary, I extracted the readable strings:

`python
re.findall(rb'"([^"]*)"', d[pos-50:pos+200])
`

This returned:

`
b'TUDCTF{As-4_cH1'
b'lD_1-yE4rn3d-f0'
b'r-thE_M1n3S}'
`

These three strings are the 4 lines of the Minecraft sign, each containing part of the flag.

---

## 8. Reconstructing the Flag

Concatenating the fragments becomes:

`
TUDCTF{As-4_cH1lD_1-yE4rn3d-f0r-thE_M1n3S}
`





