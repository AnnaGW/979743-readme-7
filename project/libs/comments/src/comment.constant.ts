export const COMMENT_NOT_FOUND = 'Comment not found';

export const CommentResponseMessage = {
  CommentCreated: 'The new comment has been successfully created.',
  CommentEdited: 'Comment has been successfully edited.',
  CommentDataError: 'The data is incorrect.',
  CommentDeleted: 'Comment has been successfully deleted.',
  CommentFound: 'Comment found',
  CommentNotFound: 'Comment not found',
  CommentCollectionLoaded: 'Comments collection loaded',
  CommentCollectionEmpty: 'Comment collection is empty',
} as const;

export const MAX_COMMMENT_LIMIT = 50;

export enum CommentDtoValidation {
  CommentTextMinLength = 10,
  CommentTextMaxLength = 300,
}
