class ApiFeatures {
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr
    }

    search(){
        const keyword = this.queryStr.keyword ? {
            name:{
                $regex:this.queryStr.keyword,
                $options: "i"  // means case insensitive
            }
        }: {}

        this.query = this.query.find({...keyword})
        return this;
    }

    filter(){
        const queryCopy = {...this.queryStr}   //it gets actual vallue =>this.queryStr  but we will use spread operator to get copy

        // Removing some field for category
        const removeFields = ["keyword", "page", "limit"]

        removeFields.forEach(key=>delete queryCopy[key])

        // Filter for price and rating

        let queryStr = JSON.stringify(queryCopy)
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`)

        this.query = this.query.find(JSON.parse(queryStr));
        return this
    }

    pagination (resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resultPerPage * (currentPage - 1)

        this.query = this.query.skip(skip).limit(resultPerPage)
        return this
    }
};
module.exports = ApiFeatures;