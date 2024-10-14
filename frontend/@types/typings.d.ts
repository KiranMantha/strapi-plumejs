interface HTMLElement {
	trigger: (eventName: string, isBubbling?: boolean) => void;
	update: () => void;
	getModel: () => { [key: string]: any };
  }
  
  interface Window {
	XMLHttpRequest: jest.Mock<any, any>;
	returnMockHttpResponse: (response: any) => void;
	MutationObserver: any;
	WebKitMutationObserver: any;
  }
  
  interface Type<T> {
	new (...args: any[]): T;
  }
  
  interface String {
	translate: (...args: any) => string;
  }
  
  interface fetch {
	resetMocks: () => void;
	mockResponseOnce: (mockResponse: string) => void;
  }
  
  declare module '*.css' {
	const content: any;
	// using style-loader will result in an object which is incompatible
	// hence use only css-loader and sass-loader which result in proper compiled css array
	// calling toString on compiled css array will result in proper css string
	// which will feed to component decorator
	export default content;
  }
  
  declare module '*.scss?inline' {
	const content: any;
	// using style-loader will result in an object which is incompatible
	// hence use only css-loader and sass-loader which result in proper compiled css array
	// calling toString on compiled css array will result in proper css string
	// which will feed to component decorator
	export default content;
  }