import fastify from "fastify";

const app = fastify()

app.listen({
    port:2345,
    host:"localhost"
},(err,path)=>{
    console.log(err||path)
})