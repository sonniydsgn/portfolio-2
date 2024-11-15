# Гайд по подготовке видео для портфолио

## Обложка видео

`ffmpeg -i ***.mp4 -vframes 1 -q:v 1 ***_cover.jpg`

## Без звука (h264)

`ffmpeg -i ***.mp4 -vcodec h264 -crf 24 -an -filter:v fps=30 ***_video.mp4`

## Со звуком (h264)

`ffmpeg -i ***.mp4 -vcodec h264 -acodec mp3 -crf 24 -pix_fmt yuv420p -profile:v baseline -level 3.0 ***_video.mp4`

## Без звука (h265)

`ffmpeg -i ***.mp4 -vcodec libx265 -crf 24 -an -filter:v fps=30 ***_h265.mp4`

## Со звуком (h265)

`ffmpeg -i ***.mp4 -vcodec libx265 -acodec mp3 -crf 24 -pix_fmt yuv420p ***_video_h265.mp4`

## Объяснение флагов

- выбор качества: 0 — лучшее, 18-29 оптимальное, 51 — худшее `-crf 24`
- смена частоты кадров видео `fps=fps=30`
- отключить звук видео `-an`
- изменение разрешения видео `scale=720:-1:flags=lanczos`, где `-1` — сохранение сохрание то же разрешение, а `-2` — разделит его на 2
- профиль для максимальной поддержки android-устройств `-profile:v baseline -level 3.0`
- цветовой формат для максимальной поддержки устройств `-pix_fmt yuv420p`
- кодирование звука в mp3-формат, чтобы safari загружал видео `-acodec mp3`

## Подробная информация

- <https://gist.github.com/jaydenseric/220c785d6289bcfd7366>
- <https://www.smashingmagazine.com/2021/02/optimizing-video-size-quality/>
- <https://developer.android.com/media/platform/supported-formats?hl=ru>
