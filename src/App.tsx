import {
  Header,
  BalanceCard,
  VenusCard,
  PricesCard,
  ErrorDisplay,
  Button,
} from "./components";
import { useBalances } from "./hooks/useBalances";
import { usePrices } from "./hooks/usePrices";

function App() {
  const {
    balance,
    venusBalances,
    loading: balanceLoading,
    error: balanceError,
    checkBaseBalance,
    checkVenusBalances,
    setError: setBalanceError,
  } = useBalances();

  const {
    btcPrice,
    altcoinPrices,
    altcoins,
    newAltcoin,
    loading: priceLoading,
    error: priceError,
    fetchPrices,
    addAltcoin,
    removeAltcoin,
    setNewAltcoin,
    setError: setPriceError,
  } = usePrices();

  const checkAll = async () => {
    setBalanceError("");
    setPriceError("");

    await Promise.all([
      checkBaseBalance(),
      checkVenusBalances(),
      fetchPrices(),
    ]);
  };

  const isLoading = balanceLoading || priceLoading;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-3 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <Header />

        {/* Check All Button */}
        <div className="flex justify-center mb-8 md:mb-12">
          <Button
            onClick={checkAll}
            disabled={isLoading}
            variant="primary"
            size="lg"
            className="shadow-2xl w-full sm:w-auto"
            icon="🚀"
          >
            {isLoading ? "Checking All Data..." : "Check All Data"}
          </Button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 md:mb-12">
          {/* Base Balance Section */}
          <BalanceCard
            balance={balance}
            loading={balanceLoading}
            onCheck={checkBaseBalance}
          />

          {/* Venus BSC Section */}
          <VenusCard
            venusBalances={venusBalances}
            loading={balanceLoading}
            onCheck={checkVenusBalances}
          />

          {/* Prices Section */}
          <div className="md:col-span-2 xl:col-span-1">
            <PricesCard
              btcPrice={btcPrice}
              altcoinPrices={altcoinPrices}
              altcoins={altcoins}
              newAltcoin={newAltcoin}
              loading={priceLoading}
              onFetchPrices={fetchPrices}
              onAddAltcoin={addAltcoin}
              onRemoveAltcoin={removeAltcoin}
              onNewAltcoinChange={setNewAltcoin}
            />
          </div>
        </div>

        {/* Error Display */}
        <ErrorDisplay error={balanceError || priceError} />

        {/* Footer */}
        <div className="text-center mt-8 md:mt-16 pb-4 md:pb-8">
          <p className="text-gray-500 text-base md:text-lg">
            Completely built with ❤️ by claude code
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
