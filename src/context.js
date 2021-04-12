import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data';


const ProductContext = React.createContext();
//Provider

//Consumer
class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        bag: [],
        modalOpen:false,
        modalProduct:detailProduct,
        bagSubTotal: 0,
        bagTax: 0,
        bagTotal: 0,
    };
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        })
        this.setState(() => {
            return { products: tempProducts}
        })
    };
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }
    handleDetail = (id) =>{
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct:product}
        })
    }
    addToBag = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inBag = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return {products: tempProducts, bag:[...this.state.bag, product]};
        },

        () => {
            this.addTotals();
        })
    }
    
    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct: product, modalOpen: true };
        });
    };
    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false };
        });
    };
    increment = (id) => {
        let tempBag = [...this.state.bag];
        const selectedProduct = tempBag.find(item => item.id === id)
        const index = tempBag.indexOf(selectedProduct);
        const product = tempBag[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;
        
        this.setState(() => {
            return{cart: [...tempBag]}
        }, () => {
            this.addTotals();
        });
    };
    decrement = (id) => {
        let tempBag = [...this.state.bag];
        const selectedProduct = tempBag.find(item => item.id === id)
        
        const index = tempBag.indexOf(selectedProduct);
        const product = tempBag[index];

        product.count = product.count - 1;
        if(product.count === 0) {
            this.removeItem(id)
        } else {
            product.total = product.count * product.price;
            this.setState(() => {
                return{bag: [...tempBag]}
            }, () => {
                this.addTotals();
            });
        } 
    };
    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempBag = [...this.state.bag];

        tempBag = tempBag.filter(item => item.id !== id);
        
        const index = tempProducts.indexOf(this.getItem(id));
        let removeProduct = tempProducts[index];
        removeProduct.inBag = false;
        removeProduct.count = 0;
        removeProduct.total = 0;

        this.setState(() => {
            return {
                bag:[...tempBag],
                products:[...tempProducts]
            }
        }, () => {
            this.addTotals();
        }
        )
    };
    clearBag = () => {
        this.setState(() => {
            return { bag: [] };
        }, () => {
            this.setProducts();
            this.addTotals();
        });
    };
    addTotals = () => {
        let subTotal = 0;
        this.state.bag.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.07;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax
        this.setState(() => {
            return {
                bagSubTotal: subTotal,
                bagTax: tax,
                bagTotal: total
            };
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,  
                handleDetail: this.handleDetail,
                addToBag: this.addToBag,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearBag:this.clearBag
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };