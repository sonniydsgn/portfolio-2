# Гайд по подготовке видео для портфолио

## Генерация обложки

`ffmpeg -i original.mp4 -vframes 1 -q:v 1 cover.jpg`

## Сжатие h264

`ffmpeg -i original.mp4 -vcodec h264 -crf 24 -an -preset slow -filter:v fps=30 video_cover.mp4`

## Сжатие h265

`ffmpeg -i original.mp4 -c:v libx265 -crf 24 -an -preset slow -filter:v fps=30 video_cover_h265.mp4`

## Объяснение флагов

- выбор качества: 0 — лучшее, 18-29 оптимальное, 51 — худшее `-crf 26`
- медленно сжатие видео, но с лучшим качеством `-preset slow`
- отключить звук видео `-an`
- сжать разрешение видео `-vf scale=1280:-2:flags=lanczos`
- смена частоты кадров видео `fps=fps=30`

## Подробная информация

- <https://gist.github.com/jaydenseric/220c785d6289bcfd7366>
- <https://www.smashingmagazine.com/2021/02/optimizing-video-size-quality/>
