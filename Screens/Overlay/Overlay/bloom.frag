// i think i stole this from somewhere, but i dont remember...

uniform sampler2D sampler0;
varying vec2 textureCoord;
varying vec4 color;
uniform vec2 imageSize;

const float blurSize = 1.0 / 512.0;
const float intensity = 0.35;
uniform float strength;

void main()
{
  vec4 sum = vec4(0);
  vec2 texcoord = textureCoord;
  vec2 clampedCoord;

  sum += texture2D(sampler0, clamp(vec2(texcoord.x - 4.0 * blurSize, texcoord.y), vec2(0.0), vec2(1.0))) * 0.05;
  sum += texture2D(sampler0, clamp(vec2(texcoord.x - 3.0 * blurSize, texcoord.y), vec2(0.0), vec2(1.0))) * 0.09;
  sum += texture2D(sampler0, clamp(vec2(texcoord.x - 2.0 * blurSize, texcoord.y), vec2(0.0), vec2(1.0))) * 0.12;
  sum += texture2D(sampler0, clamp(vec2(texcoord.x - blurSize, texcoord.y), vec2(0.0), vec2(1.0))) * 0.15;
  sum += texture2D(sampler0, texcoord) * 0.16;
  sum += texture2D(sampler0, clamp(vec2(texcoord.x + blurSize, texcoord.y), vec2(0.0), vec2(1.0))) * 0.15;
  sum += texture2D(sampler0, clamp(vec2(texcoord.x + 2.0 * blurSize, texcoord.y), vec2(0.0), vec2(1.0))) * 0.12;
  sum += texture2D(sampler0, clamp(vec2(texcoord.x + 3.0 * blurSize, texcoord.y), vec2(0.0), vec2(1.0))) * 0.09;
  sum += texture2D(sampler0, clamp(vec2(texcoord.x + 4.0 * blurSize, texcoord.y), vec2(0.0), vec2(1.0))) * 0.05;

  sum += texture2D(sampler0, clamp(vec2(texcoord.x, texcoord.y - 4.0 * blurSize), vec2(0.0), vec2(1.0))) * 0.05;
  sum += texture2D(sampler0, clamp(vec2(texcoord.x, texcoord.y - 3.0 * blurSize), vec2(0.0), vec2(1.0))) * 0.09;
  sum += texture2D(sampler0, clamp(vec2(texcoord.x, texcoord.y - 2.0 * blurSize), vec2(0.0), vec2(1.0))) * 0.12;
  sum += texture2D(sampler0, clamp(vec2(texcoord.x, texcoord.y - blurSize), vec2(0.0), vec2(1.0))) * 0.15;
  sum += texture2D(sampler0, texcoord) * 0.16;
  sum += texture2D(sampler0, clamp(vec2(texcoord.x, texcoord.y + blurSize), vec2(0.0), vec2(1.0))) * 0.15;
  sum += texture2D(sampler0, clamp(vec2(texcoord.x, texcoord.y + 2.0 * blurSize), vec2(0.0), vec2(1.0))) * 0.12;
  sum += texture2D(sampler0, clamp(vec2(texcoord.x, texcoord.y + 3.0 * blurSize), vec2(0.0), vec2(1.0))) * 0.09;
  sum += texture2D(sampler0, clamp(vec2(texcoord.x, texcoord.y + 4.0 * blurSize), vec2(0.0), vec2(1.0))) * 0.05;

  gl_FragColor = sum * strength + texture2D(sampler0, texcoord) * color;
}