using System.ComponentModel.DataAnnotations;

public class AssinaturaPlano
{
    public int Id { get; set; }
    
    [Required]
    [StringLength(100)]
    public string NomeAssinante { get; set; }
    public int PlanoId { get; set; }
    
    [Required]
    public DateTime DataInicio { get; set; }

    [Required]
    public DateTime DataFim { get; set; }
    
 
    
    public AssinaturaPlano() { }

    public AssinaturaPlano(int id, string nomeAssinante, int planoId, DateTime dataInicio, DateTime dataFim)
    {
        Id = id;
        NomeAssinante = nomeAssinante;
        PlanoId = planoId;
        DataInicio = dataInicio;
        DataFim = dataFim;
    }
}

public class AssinaturaPlanoService
{
    private List<AssinaturaPlano> _assinaturas = new List<AssinaturaPlano>();

    public AssinaturaPlano CriarAssinatura(AssinaturaPlano assinatura)
    {
        assinatura.Id = _assinaturas.Count + 1;
        _assinaturas.Add(assinatura);
        return assinatura;
    }

    public IEnumerable<AssinaturaPlano> ListarAssinaturas()
    {
        return _assinaturas;
    }

    public AssinaturaPlano ObterAssinaturaPorId(int id)
    {
        return _assinaturas.FirstOrDefault(a => a.Id == id);
    }

    public AssinaturaPlano AtualizarAssinatura(int id, AssinaturaPlano assinatura)
    {
        var existingAssinatura = _assinaturas.FirstOrDefault(a => a.Id == id);
        if (existingAssinatura != null)
        {
            existingAssinatura.NomeAssinante = assinatura.NomeAssinante;
            existingAssinatura.PlanoId = assinatura.PlanoId;
            existingAssinatura.DataInicio = assinatura.DataInicio;
            existingAssinatura.DataFim = assinatura.DataFim;
            
        }
        return existingAssinatura;
    }

    public bool ExcluirAssinatura(int id)
    {
        var assinatura = _assinaturas.FirstOrDefault(a => a.Id == id);
        if (assinatura != null)
        {
            _assinaturas.Remove(assinatura);
            return true;
        }
        return false;
    }
}