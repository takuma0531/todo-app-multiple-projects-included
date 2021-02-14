interface BaseDto {}

interface BaseReadDto extends BaseDto {
  id: string;
}

interface BaseCreateDto extends BaseDto {}

interface BaseRequestDto extends BaseDto {}

interface BaseResponseDto extends BaseDto {}

export { BaseDto, BaseReadDto, BaseCreateDto, BaseRequestDto, BaseResponseDto };
