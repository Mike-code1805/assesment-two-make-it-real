export const mockDataFavList = {
        favList:[{
            _id: expect.any(String),
        nameList: "fake nameList",
        user: "626c1db756ca795a1767fd37",
        
        fav: [
                {
                    _id: "626c75def59a537ae14e38da",
                    title: "fake title",
                    description: "fake description",
                    link: "fake link",
                    __v: 0
                },
                {
                    _id: "626c75dff59a537ae14e38de",
                    title: "fake title",
                    description: "fake description",
                    link: "fake link",
                    __v: 0
                }
                
            ],
}]
};

export const mockDataFav = {    
    fav: {
        _id: expect.any(String),
        title: "fake title",
        description: "fake description",
        link: "fake link",
        __v: 0
    }          
};

export const mockDataUser = {    
    user: {
        _id: expect.any(String),
        email: "fake email",
        password: "fake password",
        __v: 0
    }          
};