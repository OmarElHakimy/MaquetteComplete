export default interface AreaOfPractice{
    id :number;
    attributes: {
        title :string;
        cover: {
            data: {
                attributes: {
                    formats :string;
                }
            }
        }
}
}