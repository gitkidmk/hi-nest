import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// PartialTypes를 사용하면 base로 CreateMovieDto를 사용하면서 필수사항은 아니게 가져올 수 있다
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

// export class UpdateMovieDto {
//   @IsString()
//   readonly title?: string;
//   @IsNumber()
//   readonly year?: number;
//   @IsString({ each: true })
//   readonly genres?: string[];
// }
