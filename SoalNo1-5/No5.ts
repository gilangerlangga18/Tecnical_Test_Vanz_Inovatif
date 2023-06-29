type IComment = {
	commentId: number;
	commentContent: string;
	replies?: IComment[];
};

const comments: IComment[] = [
	{
		commentId: 1,
		commentContent: "hehehe",
		replies: [
			{
				commentId: 11,
				commentContent: "haha",
				replies: [
					{
						commentId: 111,
						commentContent: "haha",
					},
				],
			},
		],
	},
	{
		commentId: 1,
		commentContent: "hehehe",
		replies: [
			{
				commentId: 11,
				commentContent: "haha",
				replies: [
					{
						commentId: 111,
						commentContent: "haha",
					},
				],
			},
		],
	},
	{
		commentId: 2,
		commentContent: "hehehe",
	}
];

const commentCounter = (comments: IComment[]) => {
	let total = 0;
	comments.forEach((item) => {
		total += 1;
		if (item.replies) {
			const udin = commentCounter(item.replies);
			total += udin
		}
	});

	return total;
};

console.log(commentCounter(comments));
