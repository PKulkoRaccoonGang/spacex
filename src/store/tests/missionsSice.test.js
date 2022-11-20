import { getAllMissions } from '../slices/missionsSlice';

global.fetch = jest.fn();

describe('missionsSlice', () => {
	it('should fetcTodos with resolved response', async () => {
		const mockTodos = [
			{
				id: 1,
				title: 'test',
				completed: false,
				userId: 1,
			},
		];
		fetch.mockResolvedValue({
			ok: true,
			json: () => Promise.resolve(mockTodos),
		});

		const dispatch = jest.fn();
		const thunk = getAllMissions(9);

		await thunk(dispatch, () => ({}));
		console.log(dispatch.mock.calls);
		const { calls } = dispatch.mock;
		expect(calls).toHaveLength(2);
		const [start, end] = calls;

		expect(start[0].type).toBe('missions/getAllMissions/pending');
		expect(end[0].type).toBe('missions/getAllMissions/fulfilled');
		expect(end[0].payload).toBe(mockTodos);
	});

	it('should fetcTodos with not resolved response', async () => {
		fetch.mockResolvedValue({
			ok: false,
		});

		const dispatch = jest.fn();
		const thunk = getAllMissions(9);

		await thunk(dispatch, () => ({}));

		const { calls } = dispatch.mock;
		expect(calls).toHaveLength(2);
		const [start, end] = calls;
		console.log(end);
		expect(start[0].type).toBe('missions/getAllMissions/pending');
		expect(end[0].type).toBe('missions/getAllMissions/rejected');
		expect(end[0].meta.rejectedWithValue).toBe(true);
		expect(end[0].payload).toBe('Server error!');
	});
});
