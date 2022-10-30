
const form = document.querySelector('#searchForm');
const res = document.querySelector('#tableResult');

form.addEventListener('submit',(e)=>{

    e.preventDefault();

    const ctype = form.elements.coinType.value;

    fetchPrice(ctype);

})

const fetchPrice= async(ctype) =>{

    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=INR`);

    console.log(r.data.coin.price);
    const price = r.data.coin.price;
    const volume = r.data.coin.volume;
    const change = r.data.coin.priceChange1d;
    const base = r.data.coin.name;
    const target = 'INR';

    res.innerHTML = `<tr>
    <td class="bg-success">PROPERTY</td>
    <td class="bg-success">VALUE</td>
</tr>

<tr>
    <td>
        Coin Name
    </td>
    <td>${base}</td>
</tr>

<tr>
    <td>
        Price
    </td>
    <td>${price} ${target}</td>
</tr>

<tr>
    <td>
        Volume
    </td>
    <td>${volume}</td>
</tr>

<tr>
    <td>
        Change
    </td>
    <td>${change}</td>
</tr>`;
    
}