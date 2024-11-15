# Гайд по подготовке видео для портфолио

## Обложка видео

`ffmpeg -i ***.mp4 -vframes 1 -q:v 1 ***_cover.jpg`

## H264

`ffmpeg -i ***.mp4 -vcodec h264 -crf 27 -profile:v main -level:v 4.* -pix_fmt yuv420p -movflags faststart -tag:v avc1 ***_video.mp4`

## H265

`ffmpeg -i ***.mp4 -vcodec libx265 -crf 32 -pix_fmt yuv420p -movflags faststart -tag:v hvc1 ***_video_h265.mp4`

## WEBM (VP9)

`ffmpeg -i ***.mp4 -vcodec libvpx-vp9 -crf 40 -pix_fmt yuv420p -b:v 1M -acodec libvorbis -deadline best ***_video_vp9.webm`

## Объяснение флагов

- `-crf` — выбор качества, где 0 — лучшее, 18-30 (mp4) или 32-40 (webm) — оптимальное, 51 — худшее
- `-filter:v fps=30` — смена частоты кадров видео до 30
- `-an` — удаляет звук из видео
- `-movflags faststart` + `-tag:v avc1` (H264) или `-tag:v hvc1` (H265) — корректирует положение метаданных, чтобы видео [грузилось на устройствах apple](https://apple.stackexchange.com/a/476283) и было оптимизированно под веб
- `-vf scale=720:-1:flags=lanczos` — изменение разрешения видео к ширине 720px, где `-1` — сохранение того же соотношения сторон, а `-2` — разделит его на 2
- `-level:v 4.*` (4.0–4.2 база) — влияет на доступные фишки h264 поддержку видео устройствами, где версия ставится в зависимости от необходимого [максимального разрешения и частоты кадров](https://en.wikipedia.org/wiki/Advanced_Video_Coding#Levels)
- `-pix_fmt yuv420p` (база) — формат кодирования цветовых данных

## Подробная информация

- <https://gist.github.com/jaydenseric/220c785d6289bcfd7366>
- <https://www.smashingmagazine.com/2021/02/optimizing-video-size-quality/>
- <https://developer.android.com/media/platform/supported-formats?hl=ru>
