# Video Integration Guide

## Overview
This guide explains how to add actual video URLs to the DryerMaster video gallery once you have the YouTube video links.

## Current Status
- ✅ Video gallery UI is complete and functional
- ✅ All 13 videos from DryerMaster website are catalogued
- ✅ Categories and filtering work perfectly
- ❌ Video URLs need to be added for actual video playback
- ✅ YouTube channel link is integrated: https://www.youtube.com/channel/UCenJ1moMte_eeuIr_k6a6uA

## How to Add Video URLs

### Step 1: Get YouTube Video URLs
For each video, you'll need either:
- **YouTube video ID** (e.g., `dQw4w9WgXcQ`)
- **Full YouTube URL** (e.g., `https://www.youtube.com/watch?v=dQw4w9WgXcQ`)

### Step 2: Convert to Embed URL
YouTube embed URLs follow this format:
```
https://www.youtube.com/embed/VIDEO_ID
```

Example:
- Video URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Embed URL: `https://www.youtube.com/embed/dQw4w9WgXcQ`

### Step 3: Update VideoGallery Component
Edit `/src/components/VideoGallery.tsx` and add the `videoUrl` field to each video:

```typescript
{
  id: 'dm-mobile-overview',
  title: 'An Overview of DM Mobile',
  description: 'A walkthrough of the features of DM Mobile...',
  category: 'DM Mobile',
  videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID', // Add this line
  featured: true
}
```

## Video List for URL Updates

### DM Mobile Videos (1 video)
```typescript
{
  id: 'dm-mobile-overview',
  title: 'An Overview of DM Mobile',
  videoUrl: '', // TODO: Add YouTube embed URL
}
```

### DM510 Videos (6 videos)
```typescript
{
  id: 'dm510-basics',
  title: 'DM510 The Basics',
  videoUrl: '', // TODO: Add YouTube embed URL
},
{
  id: 'dm510-more-basics',
  title: 'DM510 More Basics',
  videoUrl: '', // TODO: Add YouTube embed URL
},
{
  id: 'dm510-introduction',
  title: 'An introduction to Dryer Master\'s DM510',
  videoUrl: '', // TODO: Add YouTube embed URL
},
{
  id: 'dm510-training',
  title: 'DM510 Training Video',
  videoUrl: '', // TODO: Add YouTube embed URL
},
{
  id: 'grain-drying-approach',
  title: 'The Dryer Master approach to grain drying',
  videoUrl: '', // TODO: Add YouTube embed URL
},
{
  id: 'moisture-sampling',
  title: 'Moisture sampling and moisture sensor calibration',
  videoUrl: '', // TODO: Add YouTube embed URL
}
```

### DM100 Videos (3 videos)
```typescript
{
  id: 'dm100-interface',
  title: 'DM100 - User Interface Overview',
  videoUrl: '', // TODO: Add YouTube embed URL
},
{
  id: 'dm100-state-logic',
  title: 'DM100 - State Logic Control',
  videoUrl: '', // TODO: Add YouTube embed URL
},
{
  id: 'dm100-calibration',
  title: 'DM100 - Moisture Sensor Calibration',
  videoUrl: '', // TODO: Add YouTube embed URL
}
```

### Moisture Monitor Pro Video (1 video)
```typescript
{
  id: 'mmp-training',
  title: 'Moisture Monitor Pro Training Video',
  videoUrl: '', // TODO: Add YouTube embed URL
}
```

### Moisture Sensor Videos (2 videos)
```typescript
{
  id: 'sensor-chute',
  title: 'Moisture sensor in chute',
  videoUrl: '', // TODO: Add YouTube embed URL
},
{
  id: 'mounting-chutes',
  title: 'Mounting chutes for Dryer Master moisture sensor',
  videoUrl: '', // TODO: Add YouTube embed URL
}
```

## Optional Enhancements

### Add Video Thumbnails
You can also add custom thumbnails:
```typescript
{
  id: 'video-id',
  title: 'Video Title',
  videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
  thumbnailUrl: 'https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg', // Auto-generated YouTube thumbnail
  // Or use custom thumbnail:
  // thumbnailUrl: '/images/video-thumbnails/custom-thumb.jpg'
}
```

### Add Video Duration
```typescript
{
  id: 'video-id',
  title: 'Video Title',
  videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
  duration: '5:30', // Format: "MM:SS" or "HH:MM:SS"
}
```

## Testing
After adding video URLs:
1. Click on any video card
2. The modal should open with the video player
3. Video should play directly in the modal
4. Test on mobile and desktop

## Current Fallback Behavior
When users click on videos without URLs:
- Shows "Video Coming Soon" message
- Links to YouTube channel
- Option to contact for video access
- Professional explanation about video library updates

## YouTube Channel Integration
- Channel URL: https://www.youtube.com/channel/UCenJ1moMte_eeuIr_k6a6uA
- Integrated into the video page with prominent CTA
- Red YouTube-branded section
- Subscribe encouragement

## Notes
- All video titles and descriptions are accurate from the original DryerMaster website
- Categories are properly organized by product line
- Featured videos are marked for prominence
- The gallery is fully functional and ready for video URLs

## Example: Complete Video Entry
```typescript
{
  id: 'dm510-training',
  title: 'DM510 Training Video',
  description: 'Complete operator training video for the DM510 Computerized Grain Drying Control System',
  category: 'DM510',
  videoUrl: 'https://www.youtube.com/embed/YOUR_ACTUAL_VIDEO_ID',
  thumbnailUrl: 'https://img.youtube.com/vi/YOUR_ACTUAL_VIDEO_ID/maxresdefault.jpg',
  duration: '15:30',
  featured: true
}
```

Once you have the actual YouTube video IDs, simply follow this guide to integrate them into the video gallery!