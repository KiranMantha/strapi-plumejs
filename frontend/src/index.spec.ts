import {
	Fixture,
	TestBed,
	flushMicroTasks,
	screen,
	waitFor
} from '@plumejs/testing';
import { vi } from 'vitest';
import { AppComponent } from './index';

describe('@plumejs/core Component', () => {
	let appRoot: Fixture<AppComponent>;

	beforeEach(async () => {
		vi.useFakeTimers();
		appRoot = await TestBed.MockComponent(AppComponent);
	});

	it('should test component internals without DOM testing', async () => {
		const { componentInstance } = appRoot;
		expect(componentInstance.title).toBe('');
		vi.advanceTimersByTime(2000);
		expect(componentInstance.title).toBe('Hello world');
	});

	it('should test component DOM changes just like as that of in React', async () => {
		const { componentInstance } = appRoot;
		expect(screen.getByShadowTestId('container')).toBeInTheDocument();
		expect(screen.getByShadowTestId('test-ele')).toBeInTheDocument();
		expect(screen.getByShadowText('Loading')).toBeInTheDocument();
		expect(screen.getByShadowTestId('loader')).toBeInTheDocument();
		vi.advanceTimersByTime(2000);
		await waitFor(flushMicroTasks());
		expect(componentInstance.title).toBe('Hello world');
		expect(screen.getByShadowText(componentInstance.title)).toBeInTheDocument();
		expect(screen.getByShadowTestId('content')).toBeInTheDocument();
	});

	afterEach(() => {
		TestBed.RemoveComponent(appRoot);
	});
});
