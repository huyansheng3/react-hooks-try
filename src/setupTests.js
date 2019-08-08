import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';
import mockAxios from 'jest-mock-axios';

afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
});
