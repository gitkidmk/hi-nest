import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { UpdateMovieDto } from './dtos/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  // Get with query argument
  @Get('/search')
  search(@Query('year') searchingYear: string) {
    return `Searching year ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieID: number): Movie {
    console.log(typeof movieID);
    return this.movieService.getOne(movieID);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.movieService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieID: number) {
    return this.movieService.deleteOne(movieID);
  }

  @Patch('/:id')
  patch(@Param('id') movieID: number, @Body() updateData: UpdateMovieDto) {
    return {
      updateMovie: movieID,
      ...updateData,
    };
  }
}
