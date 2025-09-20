'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

type LinkItem = {
  title: string
  url: string
  image: string
}

const links: LinkItem[] = [
  {
    title: 'Quran',
    url: 'https://quran.com/',
    image: '/quran.svg',
  },
  {
    title: 'Fiverr',
    url: 'https://www.fiverr.com/madebyosama',
    image: '/fiverr.svg',
  },
  {
    title: 'Upwork',
    url: 'https://www.upwork.com/nx/find-work/best-matches',
    image: '/upwork.svg',
  },
  {
    title: 'Contra',
    url: 'https://contra.com/independent/home',
    image: '/contra.svg',
  },
  {
    title: 'Zoom',
    url: 'https://app.zoom.us/wc/3988095546/start',
    image: '/zoom.svg',
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/madebyosama/',
    image: '/instagram.svg',
  },

  {
    title: 'Linkedin',
    url: 'https://www.linkedin.com/in/madebyosama/recent-activity/all/',
    image: '/linkedin.svg',
  },

  {
    title: 'Threads',
    url: 'https://www.threads.net/@madebyosama',
    image: '/threads.svg',
  },
  {
    title: 'Tiktok',
    url: 'https://www.tiktok.com/@madebyosama',
    image: '/tiktok.svg',
  },
  { title: 'X', url: 'https://twitter.com/madebyosama', image: '/x.svg' },
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/',
    image: '/facebook.svg',
  },
  {
    title: 'Youtube',
    url: 'https://www.youtube.com/@madebyosama',
    image: '/youtube.svg',
  },

  {
    title: 'Spotify',
    url: 'https://open.spotify.com/playlist/4ZUhRGeWtM5tIsvZz5OX88',
    image: '/spotify.svg',
  },
  {
    title: 'Teamcamp',
    url: 'https://dash.teamcamp.app/',
    image: '/teamcamp.svg',
  },
  {
    title: 'Pomofocus',
    url: 'https://pomofocus.io/',
    image: '/pomofocus.svg',
  },
  {
    title: 'Bookmarks',
    url: 'https://bookmarks.madebyosama.com/',
    image: '/bookmarks.svg',
  },
  {
    title: 'Raindrop',
    url: 'https://app.raindrop.io/my/54664777',
    image: '/raindrop.svg',
  },
  {
    title: 'Photopea',
    url: 'https://www.photopea.com/',
    image: '/photopea.svg',
  },
  {
    title: 'Firebase',
    url: 'https://console.firebase.google.com/project/uploadedbyosama/storage/uploadedbyosama.appspot.com/files/~2FBookmarks',
    image: '/firebase.svg',
  },
  {
    title: 'ChatGPT',
    url: 'https://chatgpt.com/?model=auto',
    image: '/chatgpt.svg',
  },
  {
    title: 'Sheets',
    url: 'https://docs.google.com/spreadsheets/d/1jonPSUsmPe5NZ9odeGyrgt8I32oViHkQ79XFVYyv2ZU/edit?gid=0#gid=0',
    image: '/sheets.svg',
  },
  {
    title: 'Docs',
    url: 'https://docs.google.com/document/u/0/',
    image: '/docs.svg',
  },

  {
    title: 'Blinkist',
    url: 'https://www.blinkist.com/en/app/for-you',
    image: '/blinkist.svg',
  },

  {
    title: 'MyMind',
    url: 'https://access.mymind.com/everything',
    image: '/mymind.svg',
  },

  {
    title: 'Github',
    url: 'https://github.com/madebyosama',
    image: '/github.svg',
  },

  {
    title: 'Figma',
    url: 'https://www.figma.com/files/team/1126831128886815857/recents-and-sharing?fuid=629777029770090983',
    image: '/figma.svg',
  },
  {
    title: 'Music',
    url: 'https://music.madebyosama.com/',
    image: '/music.svg',
  },

  {
    title: 'Notes',
    url: 'https://notes.madebyosama.com/',
    image: '/notes.svg',
  },

  {
    title: 'Meet',
    url: 'https://meet.google.com/ugw-khvs-wme',
    image: '/meet.svg',
  },
  {
    title: 'Whisk',
    url: 'https://labs.google/fx/tools/whisk/project',
    image: '/whisk.svg',
  },
]

export default function Links() {
  const [query, setQuery] = useState('')

  const filteredLinks = links.filter((link) =>
    link.title.toLowerCase().includes(query.toLowerCase())
  )

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (filteredLinks.length === 0 && query.trim() !== '') {
        window.open(
          `https://www.google.com/search?q=${encodeURIComponent(query)}`,
          '_blank'
        )
      }
    }
  }

  return (
    <div className={styles.page}>
      <input
        type='text'
        placeholder='Search links...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className={styles.searchInput}
      />

      <div className={styles.links}>
        {filteredLinks.map((link) => (
          <div
            key={link.title}
            className={styles.linkItem}
            onClick={() => {
              if (link.title === 'Bookmarks') {
                // Open multiple URLs at once
                const bookmarkUrls = [
                  'https://bookmarks.madebyosama.com/',
                  'https://app.raindrop.io/my/54664777',
                  'https://www.photopea.com/',
                  'https://console.firebase.google.com/project/uploadedbyosama/storage/uploadedbyosama.appspot.com/files/~2FBookmarks',
                  'https://chatgpt.com/c/68ce60ff-e71c-8322-ae04-b20a5bd178f3',
                  'https://docs.google.com/spreadsheets/d/1jonPSUsmPe5NZ9odeGyrgt8I32oViHkQ79XFVYyv2ZU/edit?gid=0#gid=0',
                ]
                bookmarkUrls.forEach((url) => window.open(url, '_blank'))
              } else {
                window.open(link.url, '_blank')
              }
            }}
          >
            <div className={styles.iconContainer}>
              <Image
                src={link.image}
                alt={`${link.title} icon`}
                width={48}
                height={48}
                className={styles.icon}
              />
            </div>
            <div className={styles.linkContainer}>
              <p>{link.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
