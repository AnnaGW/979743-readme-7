import { Module } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CommentFactory } from './comment.factory';
import { CommentsService } from './comment.service';
import { CommentController } from './comment.controller';
import { PublicationModule } from '@project/publication';

@Module({
  imports: [],
  controllers: [CommentController],
  providers: [CommentRepository, CommentFactory, CommentsService],
  exports: [CommentRepository],
})
export class CommentModule {}
