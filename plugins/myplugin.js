// import name from 'module';
class MyPlugin {
    constructor() {
        console.log('myplugin instantiation');
    }

    /* eslint-disable class-methods-use-this */
    apply(compiler) {
        compiler.hooks.run.tapAsync('myplugin', (_, callback) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    // 为什么该行在development时没有执行
                    console.log('myplugin apply');
                    resolve(true);
                }, 0);

                callback();
            });
        });
    }
}
module.exports = MyPlugin;
