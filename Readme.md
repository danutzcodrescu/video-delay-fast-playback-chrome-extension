# Video extension

## Motivation

I usually love to watch videos at 2x, but I have a pretty old computer and videos on [Egghead.io](https://egghead.ion).io are slow to buffer. Most of the times the videos starts and after a couple of seconds it stops in order to buffer again.

**Problem**
The video gets stucked at the point where it was buffering and only the audio continues to run. In order to get the video running in sync with the audio, I need to click on a previous buffered moment and watch the video from there

**Solution**

I discovered that when the video initially loads and the playback rate is 1x or 1.25x then it loads enough segments. Having enough segments buffered, then it is ok to increase the playback rate to 2x and the video will run without interuptions caused by buffering.

## How to use it

- clone repository
- open Chrome and type `chrome://extensions`
- click on Load unpacked
- select the folder where the repo was cloned

## To do

- [ ] add ui to define initial playback speed and desired playback speed
- [ ] add ui to define other websites other than egghead.io
