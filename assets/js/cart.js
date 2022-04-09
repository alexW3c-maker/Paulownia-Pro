document.addEventListener('DOMContentLoaded', () => {
	const productsBtn = document.querySelectorAll('.bag');
	const cartProductsList = document.querySelector('.cart-content__list');
	const cart = document.querySelector('.cart');
	const cartQuantity = cart.querySelector('.cart__quantity');
	const fullPrice = document.querySelector('.fullprice');
	let price = 0;
	let randomId = 0;
	let productArray = [];

	const priceWithoutSpaces = (str) => {
		return str.replace(/\s/g, '');
	};

	const normalPrice = (str) => {
		return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	};

	const plusFullPrice = (currentPrice) => {
		return price += currentPrice;
	};

	const minusFullPrice = (currentPrice) => {
		return price -= currentPrice;
	};

	const printQuantity = () => {
		let productsListLength = cartProductsList.querySelector('.simplebar-content').children.length;
		cartQuantity.textContent = productsListLength;
		productsListLength > 0 ? cart.classList.add('active') : cart.classList.remove('active');
	};

	const printFullPrice = () => {
		fullPrice.textContent = `${normalPrice(price)} €`;
	};

	const generateCartProduct = (img, title, price, id) => {
		return `
			<li class="cart-content__item">
				<article class="cart-content__product cart-product" data-id="${id}">
					<img src="${img}" alt="Product" class="cart-product__img">
					<div class="cart-product__text">
						<h3 class="cart-product__title">${title}</h3>
						<span class="cart-product__price">${normalPrice(price)}</span>
					</div>
					<button class="cart-product__delete" aria-label="Удалить товар"></button>
				</article>
			</li>
		`;
	};

	const deleteProducts = (productParent) => {
		let id = productParent.querySelector('.cart-product').dataset.id;
		document.querySelector(`.plant__slide[data-id="${id}"]`).querySelector('.bag').disabled = false;
		
		let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart-product__price').textContent));
		minusFullPrice(currentPrice);
		printFullPrice();
		productParent.remove();

		printQuantity();

		updateStorage();
	};

	productsBtn.forEach(el => {
		el.closest('.plant__slide').setAttribute('data-id', randomId++);

		el.addEventListener('click', (e) => {
			let self = e.currentTarget;
			let parent = self.closest('.plant__slide');
			let id = parent.dataset.id;
			let img = parent.querySelector('.plant__img').getAttribute('src');
			let title = parent.querySelector('.plant__descr').textContent;
			let priceString = priceWithoutSpaces(parent.querySelector('.plant__prices_price').textContent);
			let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.plant__prices_price').textContent));

			plusFullPrice(priceNumber);

			printFullPrice();

			cartProductsList.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceString, id));
			printQuantity();

			updateStorage();

			self.disabled = true;
		});
	});

	cartProductsList.addEventListener('click', (e) => {
		if (e.target.classList.contains('cart-product__delete')) {
			deleteProducts(e.target.closest('.cart-content__item'));
		}
	});

	const countSumm = () => {
		document.querySelectorAll('.cart-content__item').forEach(el => {
			price += parseInt(priceWithoutSpaces(el.querySelector('.cart-product__price').textContent));
		});
	};

	const initialState = () => {
		if (localStorage.getItem('products') !== null) {
			cartProductsList.querySelector('.simplebar-content').innerHTML = localStorage.getItem('products');
			printQuantity();
			countSumm();
			printFullPrice();


			document.querySelectorAll('.cart-product').forEach(el => {
				let id = el.dataset.id;
				document.querySelector(`.plant__slide[data-id="${id}"]`).querySelector('.bag').disabled = true;
			});
		}
	};

	initialState();

	const updateStorage = () => {
		let parent = cartProductsList.querySelector('.simplebar-content');
		let html = parent.innerHTML;
		html = html.trim();

		if (html.length) {
			localStorage.setItem('products', html);
		} else {
			localStorage.removeItem('products');
		}
	};



});
