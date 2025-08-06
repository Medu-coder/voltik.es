import React from 'react'
import { ViteSSG } from 'vite-ssg'
import App from './App'
import blogPosts, { BlogPost } from '@/data/blogPosts';
import './index.css'

export const createApp = ViteSSG(
  App,
  {
    routes: [
      { path: '/' },
      { path: '/blog' },
      ...blogPosts.map(post => ({ path: `/blog/${post.id}` })),
      // ...otras rutas estáticas si las tienes
    ]
  }
)