import render, { act } from 'hooks-test-util'
import useDataApi from './use-data-api'
import axios from 'jest-mock-axios';

const CancelToken = axios.CancelToken;

describe("useDataApi test", () => {

    it('useDataApi first render', () => {
        let cancel

        const { container } = render(() => useDataApi('http://hn.algolia.com/api/v1/search?query=redux', { hits: [] }))

        // 初始状态
        {
            const [{ data, isLoading, isError }, doFetch] = container.hook
            expect(data).toEqual({ hits: [] })
            expect(isLoading).toEqual(true)
            expect(isError).toEqual(false)
            expect(axios).toHaveBeenCalledWith('http://hn.algolia.com/api/v1/search?query=redux', { cancelToken: new CancelToken(c => cancel = c) });
        }

        const mockData = { hits: ['2333'] }
        let responseObj = { data: mockData };

        const lastPromiseGet = axios.lastPromiseGet()
        axios.mockResponse(responseObj);

        lastPromiseGet.finally(() => {
            const [{ data, isLoading, isError }, doFetch] = container.hook
            expect(data).toEqual(mockData)
            expect(isLoading).toEqual(false)
            expect(isError).toEqual(false)
        })

    })

    it('useDataApi doFetch', () => {

        let thenFn = jest.fn(), catchFn = jest.fn();

        const { container } = render(() => useDataApi('http://hn.algolia.com/api/v1/search?query=redux', { hits: [] }))

        const [{ data, isLoading, isError }, doFetch] = container.hook

        const firstPromiseGet = axios.lastPromiseGet()

        firstPromiseGet.catch((e) => {
            console.log('catch', e)
        })

        doFetch('http://hn.algolia.com/api/v1/search?query=vue')

        expect(axios).toHaveBeenCalledTimes(2)

        const mockData = { hits: ['vue'] }
        let responseObj = { data: mockData };

        const lastPromiseGet = axios.lastPromiseGet()
        axios.mockResponse(responseObj);

        lastPromiseGet.finally(() => {
            const [{ data, isLoading, isError }, doFetch] = container.hook
            expect(data).toEqual(mockData)
            expect(isLoading).toEqual(false)
            expect(isError).toEqual(false)
        })

    })

})
